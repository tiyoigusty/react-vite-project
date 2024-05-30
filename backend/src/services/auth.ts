import { PrismaClient } from "@prisma/client";
import { LoginDTO, RegisterDTO } from "../dto/auth-dto";
import { loginSchema, registerSchema } from "../validators/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

async function login(dto: LoginDTO) {
  try {
    // validation with joi
    const validate = loginSchema.validate(dto);
    if (validate.error) {
      return validate.error.message;
    }

    const user = await prisma.user.findUnique({
      where: { email: dto.email },
    });
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

    return {token, user}
  } catch (error) {
    return error;
  }
}

async function register(dto: RegisterDTO) {
  // validation with joi
  const validate = registerSchema.validate(dto);

  const salt = 10;
  const hashedPassword = await bcrypt.hash(dto.password, salt);

  dto.password = hashedPassword;

  if (validate.error) {
    return validate.error.message;
  }

  try {
    return await prisma.user.create({
      data: { ...dto },
    });
  } catch (error) {
    return error;
  }
}

export default { login, register };
