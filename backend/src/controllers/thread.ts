import { Request, Response } from "express";
import ThreadService from "../services/thread";
import { UserJWTPayload } from "../../types/user";
import { redisClient } from "../libs/redis";
import calculateDuration from "../services/time-service";
import { time } from "console";

async function find(req: Request, res: Response) {
  try {
    const threads = await ThreadService.find();
    const dataThread = threads.map((data) => {
      const timeDuration = calculateDuration(data.createdAt);

      return {
        id: data.id,
        content: data.content,
        image: data.image,
        userId: data.userId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        user: data.user,
        _count: data._count,
        time: timeDuration
      };
    });

    // await redisClient.set("THREADS_DATA", JSON.stringify(threads), {
    //   EX: 10,
    // });

    return res.json(dataThread);
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
    const timeDuration = calculateDuration(thread.createdAt)
    const dataThread = {...thread, time: timeDuration}
    
    return res.json(dataThread);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

async function create(req: Request, res: Response) {
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "multipart/form-data": {
                    schema: {
                    $ref: "#/components/schemas/CreateThreadDTO"
                    }  
                }
            }
        } 
    */
  try {
    const user = res.locals.user as UserJWTPayload;
    const body = {
      ...req.body,
      image: req.file ? req.file.path : "",
    };

    // await redisClient.del("THREADS_DATA")

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
