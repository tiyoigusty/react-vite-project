import { Request, Response } from "express";
import UserService from "../services/user";
import FollowService from "../services/follow";

async function find(req: Request, res: Response) {
  try {
    const search = req.query.search as string
    const user = res.locals.user
    const users = await UserService.find(search);
    return res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await UserService.findOne(Number(id));
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const user = await UserService.findOne(Number(id));

    if (!user) return res.status(500).json({ message: "USER NOT FOUND!" });

    const updateUser = await UserService.update(Number(id), req.body);
    res.json(updateUser);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function cekFollow(req: Request, res: Response) {
  try {
    const { followerId, followedId } = req.params;
    const user = await FollowService.isFollowing(Number(followerId), Number(followedId));
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

export default { find, findOne, update, cekFollow };
