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
    res.json({
      message: error,
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

    const token = jwt.sign(register.id.toString(), process.env.JWT_SECRET)
    const fullURL = req.protocol + "://" + req.get("host")
  
    const info = await transporter.sendMail({
      from: "Circle App <tiyooigustyy@gmail.com>",
      to: register.email,
      subject: "Register Success ✔",
      html: `<a href="${fullURL}/api/v1/verify-email?token=${token}">Verification your Email</a>`,
    });

    console.log("Message sent: %s", info.messageId);

    await AuthService.createVerification(token, "EMAIL")

    res.json(register);
  } catch (error) {
    res.json({
      message: error,
    });
  }
}

async function check(req: Request, res: Response) {
  try {
    const user = res.locals.user

    res.json(user);
  } catch (error) {
    res.json({
      message: error,
    });
  }
}

async function verify(req: Request, res: Response) {
  try {
    const token = req.query.token as string
    await AuthService.verify(token);

    const frontendURL = process.env.FRONTEND_URL

    res.redirect(`${frontendURL}/auth/login`);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}


export default { login, register, check, verify };
