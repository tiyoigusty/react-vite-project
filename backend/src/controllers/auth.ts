import { Request, Response } from "express";
import AuthService from "../services/auth";

async function login(req: Request, res: Response) {
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
  try {
    const register = await AuthService.register(req.body);
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


export default { login, register, check };
