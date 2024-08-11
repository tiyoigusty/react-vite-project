import { Request, Response } from "express";
import FollowService from "../services/follow";

async function find(req: Request, res: Response) {
  try {
    const search = req.query.search as string;
    const user = res.locals.user;
    const users = await FollowService.find(user, search);
    return res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function findFollowing(req: Request, res: Response) {
  try {
    const user = res.locals.user;
    const users = await FollowService.findFollowing(user);
    return res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function findFollower(req: Request, res: Response) {
  try {
    const user = res.locals.user;
    const users = await FollowService.findFollower(user);
    return res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function following(req: Request, res: Response) {
  try {
    const userId = res.locals.user.id;
    const { id } = req.params;
    const followingIdNumber = Number(id);

    const isFollowing = await FollowService.isFollowing(
      userId,
      followingIdNumber
    );

    let response;
    if (isFollowing) {
      response = await FollowService.unFollowing(userId, followingIdNumber);
      res.status(200).json(response);
    } else {
      response = await FollowService.following(userId, followingIdNumber);
      res.status(201).json(response);
    }
    
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

export default { find, findFollowing, findFollower, following };
