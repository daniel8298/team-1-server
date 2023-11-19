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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.editUser = exports.register = exports.getUser = exports.getUsers = void 0;
const bcrypt_1 = require("../helpers/bcrypt");
const dotenv_1 = __importDefault(require("dotenv"));
const mongoDb_1 = require("../../dataAccessLayer/mongoDb");
const jwt_1 = require("../../auth/jwt");
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY;
//מביא מערך של אובייקטים ממונגו
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, mongoDb_1.getAllUsersFromMongoDb)();
        if (users.length === 0) {
            throw new Error("No users in the database");
        }
        return users;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getUsers = getUsers;
//מביא יוזר אחד עפ"י Id
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, mongoDb_1.getAllUsersFromMongoDb)();
        const user = yield users.filter((user) => user.id === id);
        return user;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getUser = getUser;
//יוצר יוזר חדש
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, mongoDb_1.getAllUsersFromMongoDb)();
        if (!user.email) {
            throw new Error("Please enter an email address");
        }
        const existingUser = users.find((user1) => {
            user1.email === user.email;
        });
        if (existingUser) {
            throw new Error("This user is already registered!");
        }
        const userReturn = yield (0, mongoDb_1.insertNewUserToMongoDb)(user);
        console.log("User registered successfully:", userReturn);
        const token = (0, jwt_1.generateToken)(userReturn.id);
        return { userReturn, token };
    }
    catch (error) {
        console.error("Error during user registration:", error);
        return Promise.reject(error);
    }
});
exports.register = register;
//מעדכן יוזר
const editUser = (userId, userForUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Find the user by userId and update it in the database
        const updatedUser = yield (0, mongoDb_1.insertEditedUserToMongoDb)(userForUpdate, userId);
        if (!updatedUser) {
            throw new Error("Could not find user with this ID!");
        }
        return updatedUser;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.editUser = editUser;
//בודק אם יוזר נימצא במערכת
const Login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, mongoDb_1.inMongoDb)(email);
        if (!user) {
            throw new Error("Could not find user with this email!");
        }
        if (!(0, bcrypt_1.comparePassword)(password, user.id)) {
            throw new Error("The password is incorrect!");
        }
        const token = (0, jwt_1.generateToken)(user.id);
        return token;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.Login = Login;
