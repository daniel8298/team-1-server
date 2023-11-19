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
exports.handleGetTopFiveModels = exports.handleGetCarModel = exports.handleGetCarByCategory = exports.handleGetCars = void 0;
const handleErrors_1 = require("../../utils/handleErrors");
const productService_1 = require("../services/productService");
// GET request to retrieve all cars
const handleGetCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield (0, productService_1.getCars)(); // Make sure to replace CarInterface with the actual type of your cars
        res.status(200).json(cars);
    }
    catch (error) {
        if (error instanceof Error && error.message.match(/You must be/g)) {
            return (0, handleErrors_1.handleError)(res, error, 403);
        }
        if (error instanceof Error) {
            return (0, handleErrors_1.handleError)(res, error);
        }
    }
});
exports.handleGetCars = handleGetCars;
// GET request to retrieve cars by category
const handleGetCarByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.params;
        const cars = yield (0, productService_1.getCarsByCategory)(category); // Make sure to replace CarInterface with the actual type of your cars
        res.status(200).json(cars);
    }
    catch (error) {
        if (error instanceof Error && error.message.match(/You must be/g)) {
            return (0, handleErrors_1.handleError)(res, error, 403);
        }
        if (error instanceof Error) {
            return (0, handleErrors_1.handleError)(res, error);
        }
    }
});
exports.handleGetCarByCategory = handleGetCarByCategory;
// GET request to retrieve a car by model
const handleGetCarModel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { model } = req.params;
        const car = yield (0, productService_1.getCarModel)(model); // Make sure to replace CarInterface with the actual type of your car
        res.status(200).json(car);
    }
    catch (error) {
        if (error instanceof Error && error.message.match(/You must be/g)) {
            return (0, handleErrors_1.handleError)(res, error, 403);
        }
        if (error instanceof Error) {
            return (0, handleErrors_1.handleError)(res, error);
        }
    }
});
exports.handleGetCarModel = handleGetCarModel;
//מנהל בקשת get של חמישה עם הכי הרבה קליקים
const handleGetTopFiveModels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield (0, productService_1.getTopFiveModels)();
        res.status(200).json(cars);
    }
    catch (error) {
        if (error instanceof Error && error.message.match(/You must be/g)) {
            return (0, handleErrors_1.handleError)(res, error, 403);
        }
        if (error instanceof Error) {
            return (0, handleErrors_1.handleError)(res, error);
        }
    }
});
exports.handleGetTopFiveModels = handleGetTopFiveModels;
