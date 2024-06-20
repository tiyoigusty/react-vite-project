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
      throw new String (validate.error.message);
    }

    const user = await prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) {
      throw new String("USER NOT REGISTED!!");
    }
    
    const isValidPassword = await bcrypt.compare(dto.password, user.password);
    if (!isValidPassword) {
      throw new String("USER NOT REGISTED!!");
    }

    delete user.password;

    const jwtSecret = process.env.JWT_SECRET;

    const token = jwt.sign(user, jwtSecret);

    return {token, user}
  } catch (error) {
    throw new String(error);
  }
}

async function register(dto: RegisterDTO) {
  try {
  const validate = registerSchema.validate(dto);

  if (validate.error) {
    throw new String (validate.error.message);
  }

  const salt = 10;
  const hashedPassword = await bcrypt.hash(dto.password, salt);

  dto.password = hashedPassword;

  const signedUser = {
    fullName: dto.fullName,
    username: dto.username,
    email: dto.email
  }

  const token = jwt.sign(signedUser, process.env.JWT_SECRET)

  const info = await transporter.sendMail({
    from: "Circle App <tiyooigustyy@gmail.com>", // sender address
    to: dto.email, // list of receivers
    subject: "Register Success ✔", // Subject line
    html: "<b>Register Success</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

    return await prisma.user.create({
      data: { ...dto },
    });
  } catch (error) {
    throw new String(error);
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
      where: {token}
      })

    const userId = jwt.verify(verification.token, process.env.JWT_SECRET)

    if (verification.type === "FORGOT_PASSWORD") {
      return
    }

    return await prisma.user.update({
      data: {isVerified: true}, where: {id: Number(userId)}
    })
  } catch (error) {
    throw new Error(error.message || "Failed to verify!!");
  }
}

export default { login, register, createVerification, verify };
