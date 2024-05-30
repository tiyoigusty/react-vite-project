import joi from "joi";
import { LoginDTO, RegisterDTO } from "../dto/auth-dto";

export const loginSchema = joi.object<LoginDTO>({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const registerSchema = joi.object<RegisterDTO>({
  email: joi.string().email().required(),
  fullName: joi.string().min(1),
  username: joi.string().min(1),
  password: joi.string()
});
