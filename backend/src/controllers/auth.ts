import { Request, Response } from "express";
import AuthService from "../services/auth";
import { transporter } from "../libs/nodemailer";
import jwt from "jsonwebtoken";
import user from "./user";

async function login(req: Request, res: Response) {
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                    $ref: "#/components/schemas/LoginDTO"
                    }  
                }
            }
        } 
    */
  try {
    const login = await AuthService.login(req.body);
    res.json(login);
  } catch (error) {
    res.status(error.message === "User not found" ? 404 : 500).json({
      message: error.message,
    });
  }
}

async function register(req: Request, res: Response) {
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                    $ref: "#/components/schemas/RegisterDTO"
                    }  
                }
            }
        } 
    */
  try {
    const register = await AuthService.register(req.body);

    const token = jwt.sign(register.id.toString(), process.env.JWT_SECRET);
    const fullURL = req.protocol + "://" + req.get("host");

    const info = await transporter.sendMail({
      from: "Circle App <agikgigih98@gmail.com>",
      to: register.email,
      subject: "Register Success ✔",
      html: `<h1>Welcome to Circle</h1>
              <p>Thanks for registering for an account on Circle! Before we get started, we
                just need to confirm that this is you. Click below to verify your email
                address: </p>
              <button style="padding: 10px; background: rgb(0, 142, 236); border-radius: 10px; border: none;">
                <a href="${fullURL}/api/v1/auth/verify-email?token=${token}" style="color: white; text-decoration: none">Verification your Email</a>
              </button>`,
    });

    console.log("Message sent: %s", info.messageId);

    await AuthService.createVerification(token, "EMAIL");

    res.status(200).json(register);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function check(req: Request, res: Response) {
  try {
    const user = res.locals.user;

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function verify(req: Request, res: Response) {
  try {
    const token = req.query.token as string;
    await AuthService.verify(token);

    const frontendURL = process.env.FRONTEND_URL;

    res.redirect(`${frontendURL}/auth/login`);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function requestPasswordReset(req: Request, res: Response) {
  try {
    const { email } = req.body;
    const user = await AuthService.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const fullURL = req.protocol + "://" + req.get("host");

    await transporter.sendMail({
      from: "Circle App <agikgigih98@gmail.com>",
      to: email,
      subject: "Password Reset Request",
      html: `<h1>Reset Your Password</h1>
            <p>To reset your password, please click the following link: </p>
            <button style="padding: 10px; background: rgb(0, 142, 236); border-radius: 10px; border: none;">
              <a href="${fullURL}/api/v1/auth/reset-password?token=${token}" style="color: white; text-decoration: none">Reset Password</a>
            </button>`,
    });

    await AuthService.createVerification(token, "FORGOT_PASSWORD");

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Fungsi untuk mengatur ulang password
async function resetPassword(req: Request, res: Response) {
  try {
    const { token, newPassword } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as {
      userId: number;
    };

    await AuthService.resetPassword(decoded.userId, newPassword);

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default {
  login,
  register,
  check,
  verify,
  requestPasswordReset,
  resetPassword,
};
