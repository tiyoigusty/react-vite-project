"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var auth_1 = require("../validators/auth");
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var prisma = new client_1.PrismaClient();
function login(dto) {
    return __awaiter(this, void 0, void 0, function () {
        var validate, user, isValidPassword, jwtSecret, token, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    validate = auth_1.loginSchema.validate(dto);
                    if (validate.error) {
                        throw new String(validate.error.message);
                    }
                    return [4 /*yield*/, prisma.user.findUnique({
                            where: { email: dto.email },
                        })];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        throw new String("USER NOT REGISTED!!");
                    }
                    return [4 /*yield*/, bcrypt_1.default.compare(dto.password, user.password)];
                case 2:
                    isValidPassword = _a.sent();
                    if (!isValidPassword) {
                        throw new String("USER NOT REGISTED!!");
                    }
                    delete user.password;
                    jwtSecret = process.env.JWT_SECRET;
                    token = jsonwebtoken_1.default.sign(user, jwtSecret);
                    return [2 /*return*/, { token: token, user: user }];
                case 3:
                    error_1 = _a.sent();
                    throw new String(error_1);
                case 4: return [2 /*return*/];
            }
        });
    });
}
function register(dto) {
    return __awaiter(this, void 0, void 0, function () {
        var validate, salt, hashedPassword, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    validate = auth_1.registerSchema.validate(dto);
                    salt = 10;
                    return [4 /*yield*/, bcrypt_1.default.hash(dto.password, salt)];
                case 1:
                    hashedPassword = _a.sent();
                    dto.password = hashedPassword;
                    if (validate.error) {
                        throw new String(validate.error.message);
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, prisma.user.create({
                            data: __assign({}, dto),
                        })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    error_2 = _a.sent();
                    throw new String(error_2);
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.default = { login: login, register: register };
//# sourceMappingURL=auth.js.map