import express, { Request, Response } from "express";
import cors from "cors";
import ThreadController from "./controllers/thread"
import AuthController from "./controllers/auth"
import dotenv from "dotenv"
import { upload } from "./middlewares/upload-file";
dotenv.config()

const app = express();
const port = 5000;
const routerv1 = express.Router();
const routerv2 = express.Router();

app.use(cors());
app.use(express.json());
app.use("/api/v1", routerv1);
app.use("/api/v2", routerv2);
app.use("/uploads", express.static("uploads"))

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO");
});

// v1
routerv1.get("/", (req: Request, res: Response) => {
  res.send("HELLO THIS IS VERSION 1");
});

routerv1.post("/auth/register", AuthController.register)
routerv1.post("/auth/login", AuthController.login)

routerv1.get("/threads", ThreadController.find);
routerv1.post("/threads", upload.single("image"), ThreadController.create);
routerv1.get("/threads/:id", ThreadController.findOne);
routerv1.patch("/threads/:id", ThreadController.update);
routerv1.delete("/threads/:id", ThreadController.remove);

// v2
routerv2.get("/", (req: Request, res: Response) => {
  res.send("HELLO THIS IS VERSION 2");
});

app.listen(port, () => {
  console.log(`SERVER RUNING ON PORT ${port}`);
});
