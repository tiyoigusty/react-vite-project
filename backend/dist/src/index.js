"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var thread_1 = __importDefault(require("./controllers/thread"));
var auth_1 = __importDefault(require("./controllers/auth"));
var user_1 = __importDefault(require("./controllers/user"));
var dotenv_1 = __importDefault(require("dotenv"));
var upload_file_1 = require("./middlewares/upload-file");
var auth_2 = require("./middlewares/auth");
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT || 5000;
var routerv1 = express_1.default.Router();
var routerv2 = express_1.default.Router();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1", routerv1);
app.use("/api/v2", routerv2);
app.use("/uploads", express_1.default.static("uploads"));
app.get("/", function (req, res) {
    res.send("HELLO");
});
// v1
routerv1.get("/", function (req, res) {
    res.send("HELLO THIS IS VERSION 1");
});
routerv1.post("/auth/register", auth_1.default.register);
routerv1.post("/auth/login", auth_1.default.login);
routerv1.post("/auth/check", auth_2.authenticate, auth_1.default.check);
routerv1.get("/users", auth_2.authenticate, user_1.default.find);
routerv1.get("/threads", auth_2.authenticate, thread_1.default.find);
routerv1.post("/threads", auth_2.authenticate, upload_file_1.upload.single("image"), thread_1.default.create);
routerv1.get("/threads/:id", auth_2.authenticate, thread_1.default.findOne);
routerv1.patch("/threads/:id", auth_2.authenticate, thread_1.default.update);
routerv1.delete("/threads/:id", auth_2.authenticate, thread_1.default.remove);
// v2
routerv2.get("/", function (req, res) {
    res.send("HELLO THIS IS VERSION 2");
});
app.listen(port, function () {
    console.log("SERVER RUNNING ON PORT ".concat(port));
});
//# sourceMappingURL=index.js.map