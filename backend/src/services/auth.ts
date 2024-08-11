import { PrismaClient, VerificationType } from "@prisma/client";
import { LoginDTO, RegisterDTO } from "../dto/auth-dto";
import { loginSchema, registerSchema } from "../validators/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { transporter } from "../libs/nodemailer";

const prisma = new PrismaClient();

async function login(dto: LoginDTO) {
  try {
    // validation with joi
    const validate = loginSchema.validate(dto);
    if (validate.error) {
      throw new Error(validate.error.message);
    }

    const user = await prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user.isVerified) {
      throw new Error("USER NOT VERIFIED!!");
    }
    if (!user) {
      throw new Error("USER NOT REGISTED!!");
    }

    const isValidPassword = await bcrypt.compare(dto.password, user.password);
    if (!isValidPassword) {
      throw new Error("USER NOT REGISTED!!");
    }

    delete user.password;

    const jwtSecret = process.env.JWT_SECRET;

    const token = jwt.sign(user, jwtSecret);

    return { token, user };
  } catch (error) {
    throw new Error(error.message || "Login Failed!");
  }
}

async function register(dto: RegisterDTO) {
  try {
    const validate = registerSchema.validate(dto);

    if (validate.error) {
      throw new Error(validate.error.message);
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    dto.password = hashedPassword;

    return await prisma.user.create({
      data: { ...dto },
    });
  } catch (error) {
    throw new Error(error.message || "Register Failed!");
  }
}

async function createVerification(token: string, type: VerificationType) {
  try {
    return await prisma.verification.create({
      data: { token, type },
    });
  } catch (error) {
    throw new Error(error.message || "Failed to verify!!");
  }
}

async function verify(token: string) {
  try {
    const verification = await prisma.verification.findUnique({
      where: { token },
    });

    const userId = jwt.verify(verification.token, process.env.JWT_SECRET);

    if (verification.type === "FORGOT_PASSWORD") {
      return;
    }

    return await prisma.user.update({
      data: { isVerified: true },
      where: { id: Number(userId) },
    });
  } catch (error) {
    throw new Error(error.message || "Failed to verify!!");
  }
}

async function findUserByEmail(email: string) {
  try {
    return await prisma.user.findUnique({
      where: { email },
    });
  } catch (error) {
    throw new Error("Error finding user");
  }
}

async function resetPassword(userId: number, newPassword: string) {
  try {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
  } catch (error) {
    throw new Error("Error resetting password");
  }
}

export default {
  login,
  register,
  createVerification,
  verify,
  findUserByEmail,
  resetPassword,
};
