import { Request, Response } from "express";
import FollowService from "../services/follow";

async function find(req: Request, res: Response) {
    try {
      const search = req.query.search as string
      const user = res.locals.user
      const users = await FollowService.find(user, search);
      return res.json(users);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  export default {find}