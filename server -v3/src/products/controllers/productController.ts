import { Request, Response } from "express";
import CarInterface from "../interfaces/ProductInterface";
import { handleError } from "../../utils/handleErrors";
import {
  getCars,
  getCarsByCategory,
  getCarModel,
  getTopFiveModels,
} from "../services/productService";

// GET request to retrieve all cars
export const handleGetCars = async (req: Request, res: Response) => {
  try {
    const cars: CarInterface[] = await getCars(); // Make sure to replace CarInterface with the actual type of your cars
    res.status(200).json(cars);
  } catch (error) {
    if (error instanceof Error && error.message.match(/You must be/g)) {
      return handleError(res, error, 403);
    }
    if (error instanceof Error) {
      return handleError(res, error);
    }
  }
};

// GET request to retrieve cars by category
export const handleGetCarByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const cars: CarInterface[] = await getCarsByCategory(category); // Make sure to replace CarInterface with the actual type of your cars
    res.status(200).json(cars);
  } catch (error) {
    if (error instanceof Error && error.message.match(/You must be/g)) {
      return handleError(res, error, 403);
    }
    if (error instanceof Error) {
      return handleError(res, error);
    }
  }
};

// GET request to retrieve a car by model
export const handleGetCarModel = async (req: Request, res: Response) => {
  try {
    const { model } = req.params;
    const car = await getCarModel(model); // Make sure to replace CarInterface with the actual type of your car
    res.status(200).json(car);
  } catch (error) {
    if (error instanceof Error && error.message.match(/You must be/g)) {
      return handleError(res, error, 403);
    }
    if (error instanceof Error) {
      return handleError(res, error);
    }
  }
};

//מנהל בקשת get של חמישה עם הכי הרבה קליקים
export const handleGetTopFiveModels = async (req: Request, res: Response) => {
  try {
    const cars: CarInterface[] = await getTopFiveModels();
    res.status(200).json(cars);
  } catch (error) {
    if (error instanceof Error && error.message.match(/You must be/g)) {
      return handleError(res, error, 403);
    }
    if (error instanceof Error) {
      return handleError(res, error);
    }
  }
};
