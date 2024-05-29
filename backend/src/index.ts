import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 5000;
const routerv1 = express.Router();
const routerv2 = express.Router();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use("/api/v1", routerv1);
app.use("/api/v2", routerv2);

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO");
});

// v1
routerv1.get("/", (req: Request, res: Response) => {
  res.send("HELLO THIS IS VERSION 1");
});

type CreateThreadDTO = {
  content: string;
  image: string;
};

routerv1.post("/threads", async (req: Request, res: Response) => {
  try {
    const dto = req.body as CreateThreadDTO;

    const threads = await prisma.thread.create({
      data: { ...dto },
    });

    res.json(threads);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

routerv1.patch("/threads/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dto = req.body as CreateThreadDTO;

    const threads = await prisma.thread.findFirst({
      where: { id: Number(id) },
    });

    if (!threads)
      return res.status(500).json({ message: "THREAD NOT FOUND!!" });

    if (dto.content) {
      threads.content = dto.content;
    }
    if (dto.image) {
      threads.image = dto.image;
    }

    const updatedThread = await prisma.thread.update({
      where: { id: Number(id) },
      data: { ...threads },
    });
    res.json({ updatedThread });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

routerv1.get("/threads", async (req: Request, res: Response) => {
  try {
    const threads = await prisma.thread.findMany();
    res.json(threads);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

routerv1.get("/threads/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const threads = await prisma.thread.findFirst({
      where: { id: Number(id) },
    });
    res.json(threads);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

routerv1.delete("/threads/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const thread = await prisma.thread.count({
      where: { id: Number(id) },
    });

    if (!thread) return res.status(500).json({ message: "THREAD NOT FOUND!" });

    const deletedThread = await prisma.thread.delete({
      where: { id: Number(id) },
    });
    res.json(deletedThread);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

// v2
routerv2.get("/", (req: Request, res: Response) => {
  res.send("HELLO THIS IS VERSION 2");
});

app.listen(port, () => {
  console.log(`SERVER RUNING ON PORT ${port}`);
});
