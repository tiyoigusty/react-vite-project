import { Request, Response } from "express";
import ProfileService from "../services/profile"

async function find(req: Request, res: Response) {
    try {
        const {id} = req.params
      const threads = await ProfileService.find(Number(id));
  
      return res.json(threads);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  export default { find };