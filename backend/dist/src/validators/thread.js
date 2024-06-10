"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThreadSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.createThreadSchema = joi_1.default.object({
    content: joi_1.default.string().min(1).required(),
    image: joi_1.default.string(),
});
//# sourceMappingURL=thread.js.map