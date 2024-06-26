import { Request, Response } from "express";
import { UserJWTPayload } from "../../types/user";
import ReplyService from "../services/reply";

async function find(req: Request, res: Response) {
  try {
    const {id} = req.params
    const replies = await ReplyService.find(Number(id));

    return res.json(replies);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const reply = await ReplyService.findOne(Number(id));
    res.json(reply);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function create(req: Request, res: Response) {
  try {
    const {id} = req.params
    const user = res.locals.user as UserJWTPayload;
    const body = {
      ...req.body,
      image: req.file ? req.file.path : "",
    };

    const createdReply = await ReplyService.create(body, user.id, Number(id));
    res.status(201).json(createdReply);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const reply = await ReplyService.findOne(Number(id));

    if (!reply) return res.status(500).json({ message: "THREAD NOT FOUND!" });

    const updatedReply = await ReplyService.update(Number(id), req.body);
    res.json(updatedReply);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const reply = await ReplyService.findOne(Number(id));

    if (!reply) return res.status(500).json({ message: "THREAD NOT FOUND!" });

    const deletedReply = await ReplyService.remove(Number(id));

    res.json(deletedReply);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

export default { find, findOne, create, update, remove };
