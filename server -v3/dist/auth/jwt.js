"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { JWT_SECRET } = process.env;
const generateToken = (id) => {
    if (!JWT_SECRET)
        throw new Error("JWT_SECRET is not defined");
    const token = jsonwebtoken_1.default.sign({ id }, JWT_SECRET, { expiresIn: "1h" });
    return token;
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    try {
        if (!JWT_SECRET)
            throw new Error("JWT_SECRET is not defined");
        const userPayload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        return userPayload;
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
