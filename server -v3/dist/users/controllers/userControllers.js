"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogin = exports.handleEditUserById = exports.handleUserRegistration = exports.handleGetById = exports.handleGetUsers = void 0;
const userServices_1 = require("../services/userServices");
const handleErrors_1 = require("../../utils/handleErrors");
// מקבלת יוזרים מסרביס ושולחת כ res
const handleGetUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userServices_1.getUsers)();
        res.json(users);
    }
    catch (error) {
        if (error instanceof Error && error.message.match(/You must be/g)) {
            (0, handleErrors_1.handleError)(res, error, 403);
        }
        else if (error instanceof Error) {
            (0, handleErrors_1.handleError)(res, error);
        }
    }
});
exports.handleGetUsers = handleGetUsers;
// מקבל יוזר מהסרביס ומעביר הלאה
const handleGetById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, userServices_1.getUser)(id);
        res.json(user);
    }
    catch (error) {
        if (error instanceof Error && error.message.match(/You must be/g)) {
            (0, handleErrors_1.handleError)(res, error, 403);
        }
        else if (error instanceof Error) {
            (0, handleErrors_1.handleError)(res, error);
        }
    }
});
exports.handleGetById = handleGetById;
// מטפל בבקשת פוסט ליצירת משתמש חדש
const handleUserRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const userFromDB = yield (0, userServices_1.register)(user);
        res.status(200).json(userFromDB);
    }
    catch (error) {
        if (error instanceof Error) {
            (0, handleErrors_1.handleError)(res, error);
        }
    }
});
exports.handleUserRegistration = handleUserRegistration;
// מטפל בבקשת פוט לעדכון משתמש
const handleEditUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userForUpdate = req.body;
        const updatedUser = yield (0, userServices_1.editUser)(id, userForUpdate);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        if (error instanceof Error) {
            (0, handleErrors_1.handleError)(res, error);
        }
    }
});
exports.handleEditUserById = handleEditUserById;
// מטפל בהתחברות משתמש
const handleLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const log = req.body;
        if (log) {
            const email = log.email;
            const password = log.password;
            const token = yield (0, userServices_1.Login)(email, password);
            if (token) {
                res.status(200).send(token);
            }
            else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        }
        else {
            throw new Error("log not found!");
        }
    }
    catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.handleLogin = handleLogin;
