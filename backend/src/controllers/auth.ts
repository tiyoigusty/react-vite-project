import { Request, Response } from "express";
import AuthService from "../services/auth";

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
