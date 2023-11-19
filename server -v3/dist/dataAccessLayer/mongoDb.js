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
exports.insertEditedProductToMongoDb = exports.getAllProductsFromMongoDb = exports.inMongoDb = exports.insertEditedUserToMongoDb = exports.insertNewUserToMongoDb = exports.getAllUsersFromMongoDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserModel_1 = __importDefault(require("../config-models/UserModel"));
const ProductModel_1 = __importDefault(require("../config-models/ProductModel"));
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb+srv://admin:admin@project0api.6qm7wiw.mongodb.net/?retryWrites=true&w=majority");
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
});
//מביא את כל היוזרים ממונגו דיבי
const getAllUsersFromMongoDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UserModel_1.default.find();
        return users;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getAllUsersFromMongoDb = getAllUsersFromMongoDb;
//מכניס יוזר חדש לדאטהבייס
const insertNewUserToMongoDb = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield UserModel_1.default.create(user);
        return newUser;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.insertNewUserToMongoDb = insertNewUserToMongoDb;
//מעדכן יוזר חדש
const insertEditedUserToMongoDb = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const editedUser = yield UserModel_1.default.findByIdAndUpdate(id, user, { new: true } // Return the updated document
        );
        return editedUser;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.insertEditedUserToMongoDb = insertEditedUserToMongoDb;
//בודק אם יוזר נימצא בדאטה בייס
const inMongoDb = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.findOne({ email }).exec();
        return user;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.inMongoDb = inMongoDb;
//////////////////////////
//דאל של פרודוקטס
//מביא את כל הפרודוקטס ממונגו דיבי
const getAllProductsFromMongoDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield ProductModel_1.default.find();
        return products;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getAllProductsFromMongoDb = getAllProductsFromMongoDb;
const insertEditedProductToMongoDb = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const editedProduct = yield ProductModel_1.default.findByIdAndUpdate(id, user, { new: true } // Return the updated document
        );
        return editedProduct;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.insertEditedProductToMongoDb = insertEditedProductToMongoDb;
exports.default = connectToDatabase;
