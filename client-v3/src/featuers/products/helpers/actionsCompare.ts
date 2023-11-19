import { CarInterface } from "../interfaces/interface";

const carsData: CarInterface[] = [];

export const addToCompare = (data: CarInterface) => {
  const exists = carsData.find((existingCar) => existingCar._id === data._id);

  if (!exists) {
    carsData.push(data);
  }
};

export const carsInCompare = () => {
  return carsData;
};
