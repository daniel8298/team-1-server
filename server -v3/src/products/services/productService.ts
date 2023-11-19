import Car from "../interfaces/ProductInterface";
import {
  getAllProductsFromMongoDb,
  insertEditedProductToMongoDb,
} from "../../dataAccessLayer/mongoDb";

//מביא את כל המכוניות מהdb
export const getCars = async () => {
  try {
    const cars = await getAllProductsFromMongoDb();
    if (cars.length === 0) {
      throw new Error("No users in the database");
    }
    return cars;
  } catch (error) {
    return Promise.reject(error);
  }
};

//מביא מכוניות  עפ"י Category
export const getCarsByCategory = async (category: string) => {
  try {
    const cars = await getAllProductsFromMongoDb();
    const carsCategory = cars.filter((car: Car) => car.category === category);
    console.log(carsCategory);
    return carsCategory;
  } catch (error) {
    return Promise.reject(error);
  }
};

//מביא מכונית אחת עפ"י Model
export const getCarModel = async (model: string) => {
  try {
    const cars = await getAllProductsFromMongoDb();
    let carModel = cars.filter((car: Car) => car.model === model);
    carModel[0].clicks = carModel[0].clicks + 1;
    const finalCar = insertEditedProductToMongoDb(carModel[0], carModel[0].id);
    return finalCar;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTopFiveModels = async () => {
  try {
    const cars = await getAllProductsFromMongoDb();
    if (cars.length === 0) {
      throw new Error("No users in the database");
    }
    const sortedCars = cars.sort((a, b) => b.clicks! - a.clicks!);
    const topFiveCars = sortedCars.slice(0, 5);
    return topFiveCars;
  } catch (error) {
    return Promise.reject(error);
  }
};
