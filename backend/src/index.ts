import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import ThreadController from "./controllers/thread";
import AuthController from "./controllers/auth";
import UserController from "./controllers/user";
import ReplyController from "./controllers/reply";
import ProfileController from "./controllers/profile";
import LikeController from "./controllers/like";
import FollowController from "./controllers/follow";
import dotenv from "dotenv";
import { upload } from "./middlewares/upload-file";
import { authenticate } from "./middlewares/auth";
import swaggerUI from "swagger-ui-express";
import swaggerDoc from "../swagger/swagger-output.json";
import { initializeRedisClient, redisClient } from "./libs/redis";
import { rateLimit } from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";

dotenv.config();

export const app = express();
const port = process.env.PORT || 5000;
const routerv1 = express.Router();
const routerv2 = express.Router();

// const limiter = rateLimit({
//   windowMs: 1 * 60 * 1000,
//   limit: 100,
//   standardHeaders: "draft-7",
//   legacyHeaders: false,
//   store: new RedisStore({
//     sendCommand: (...args: string[]) => redisClient.sendCommand(args),
//   }),
// });

// app.use(limiter);

app.use(cors());
app.use(express.json());
app.use("/api/v1", routerv1);
app.use("/api/v2", routerv2);
app.use("/uploads", express.static("uploads"));
app.use(
  "/docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDoc, {
    explorer: true,
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
    },
  })
);

app.get("/", async (req: Request, res: Response) => {
  res.send("HELLO");
});

// v1
routerv1.get("/", (req: Request, res: Response) => {
  res.send("HELLO THIS IS VERSION 1");
});

routerv1.post("/auth/register", AuthController.register);
routerv1.post("/auth/login", AuthController.login);
routerv1.post("/auth/check", authenticate, AuthController.check);
routerv1.get("/auth/verify-email", AuthController.verify);
routerv1.post(
  "/auth/request-password-reset",
  AuthController.requestPasswordReset
);
routerv1.post("/auth/reset-password", AuthController.resetPassword);

routerv1.get("/users", authenticate, UserController.find);
routerv1.get(
  "/cek-follow/:followerId/:followedId",
  authenticate,
  UserController.cekFollow
);
routerv1.get("/users/:id", authenticate, UserController.findOne);
routerv1.patch(
  "/users/:id",
  authenticate,
  // upload.single("background"),
  upload.single("photoProfile"),
  UserController.update
);

routerv1.get("/followings", authenticate, FollowController.findFollowing);
routerv1.get("/followers", authenticate, FollowController.findFollower);
routerv1.get("/follows", authenticate, FollowController.find);
routerv1.post("/follows/:id", authenticate, FollowController.following);

routerv1.get(
  "/threads",
  authenticate,
  // async (req: Request, res: Response, next: NextFunction) => {
  //   const result = await redisClient.get("THREADS_DATA");
  //   if (result) return res.json(JSON.parse(result));

  //   next();
  // },
  ThreadController.find
);
routerv1.post(
  "/threads",
  authenticate,
  upload.single("image"),
  ThreadController.create
);
routerv1.get("/threads/:id", authenticate, ThreadController.findOne);
routerv1.patch(
  "/threads/:id",
  authenticate,
  upload.single("image"),
  ThreadController.update
);
routerv1.delete("/threads/:id", authenticate, ThreadController.remove);

routerv1.get("/replies/:id", authenticate, ReplyController.find);
routerv1.get("/replies/:id", authenticate, ReplyController.findOne);
routerv1.post(
  "/replies/:id",
  authenticate,
  upload.single("image"),
  ReplyController.create
);
routerv1.patch(
  "/replies/:id",
  authenticate,
  upload.single("image"),
  ReplyController.update
);
routerv1.delete("/replies/:id", authenticate, ReplyController.remove);

routerv1.get("/likes", authenticate, LikeController.find);

routerv1.get("/profiles/:id", authenticate, ProfileController.find);

// v2
routerv2.get("/", (req: Request, res: Response) => {
  res.send("HELLO THIS IS VERSION 2");
});

app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ${port}`);
});
