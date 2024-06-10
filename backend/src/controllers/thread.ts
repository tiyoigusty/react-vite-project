import { Request, Response } from "express";
import ThreadService from "../services/thread";
import { UserJWTPayload } from "../../types/user";

async function find(req: Request, res: Response) {
  try {
    const threads = await ThreadService.find();
    return res.json(threads);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const thread = await ThreadService.findOne(Number(id));
    res.json(thread);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function create(req: Request, res: Response) {
  try {
  const user = res.locals.user as UserJWTPayload
  const body = {
    ...req.body,
    image: req.file ? req.file.path : "",
  };

    const createdThread = await ThreadService.create(body, user.id);
    res.status(201).json(createdThread);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const thread = await ThreadService.findOne(Number(id));

    if (!thread) return res.status(500).json({ message: "THREAD NOT FOUND!" });

    const updatedThread = await ThreadService.update(Number(id), req.body);
    res.json(updatedThread);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const thread = await ThreadService.findOne(Number(id));

    if (!thread) return res.status(500).json({ message: "THREAD NOT FOUND!" });

    const deletedThread = await ThreadService.remove(Number(id));

    res.json(deletedThread);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

export default { find, findOne, create, update, remove };
