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
exports.getTopFiveModels = exports.getCarModel = exports.getCarsByCategory = exports.getCars = void 0;
const mongoDb_1 = require("../../dataAccessLayer/mongoDb");
//מביא את כל המכוניות מהdb
const getCars = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield (0, mongoDb_1.getAllProductsFromMongoDb)();
        if (cars.length === 0) {
            throw new Error("No users in the database");
        }
        return cars;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getCars = getCars;
//מביא מכוניות  עפ"י Category
const getCarsByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield (0, mongoDb_1.getAllProductsFromMongoDb)();
        const carsCategory = cars.filter((car) => car.category === category);
        console.log(carsCategory);
        return carsCategory;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getCarsByCategory = getCarsByCategory;
//מביא מכונית אחת עפ"י Model
const getCarModel = (model) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield (0, mongoDb_1.getAllProductsFromMongoDb)();
        let carModel = cars.filter((car) => car.model === model);
        carModel[0].clicks = carModel[0].clicks + 1;
        const finalCar = (0, mongoDb_1.insertEditedProductToMongoDb)(carModel[0], carModel[0].id);
        return finalCar;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getCarModel = getCarModel;
const getTopFiveModels = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield (0, mongoDb_1.getAllProductsFromMongoDb)();
        if (cars.length === 0) {
            throw new Error("No users in the database");
        }
        const sortedCars = cars.sort((a, b) => b.clicks - a.clicks);
        const topFiveCars = sortedCars.slice(0, 5);
        return topFiveCars;
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.getTopFiveModels = getTopFiveModels;
