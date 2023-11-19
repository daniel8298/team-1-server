"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    numOfWheels: { type: Number, required: true },
    numOfDoors: { type: Number, required: true },
    wheelSize: { type: Number, required: true },
    color: { type: String, required: true },
    specs: {
        engine: { type: String, required: true },
        transmission: { type: String, required: true },
        horsepower: { type: Number, required: true },
    },
    clicks: { type: Number, default: 0 },
});
const Product = mongoose_1.default.model("Product", ProductSchema);
exports.default = Product;
