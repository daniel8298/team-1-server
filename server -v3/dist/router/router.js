"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userRoutes_1 = __importDefault(require("../users/routes/userRoutes"));
const productRoutes_1 = __importDefault(require("../products/routes/productRoutes"));
router.use("/users", userRoutes_1.default);
router.use("/products", productRoutes_1.default);
router.use("*", (req, res) => res.status(404).send("Page not found!"));
exports.default = router;
