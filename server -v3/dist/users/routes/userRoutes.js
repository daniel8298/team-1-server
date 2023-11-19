"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const router = express_1.default.Router();
router.get("/", userControllers_1.handleGetUsers);
router.post("/registration", userControllers_1.handleUserRegistration);
router.get("/:id", userControllers_1.handleGetById);
router.put("/:id", userControllers_1.handleEditUserById);
router.post("/login", userControllers_1.handleLogin);
exports.default = router;
