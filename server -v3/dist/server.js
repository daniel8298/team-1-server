"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from "./cors/cors";
const cors_1 = __importDefault(require("cors"));
const mongoDb_1 = __importDefault(require("./dataAccessLayer/mongoDb"));
const router_1 = __importDefault(require("./router/router"));
const morgan_1 = __importDefault(require("./logger/morgan"));
const app = (0, express_1.default)();
app.use(morgan_1.default);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//חדש ראוטר
app.use(router_1.default);
//איתחול השרת
app.listen(3000, () => {
    console.log("server up!");
    (0, mongoDb_1.default)();
});
//קריאה לפונקציה שמחברת את השרת לדאטהבייס
