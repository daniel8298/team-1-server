import { CarInterface } from "../interfaces/interface";

const carsData: CarInterface[] = [];

export const addToCart = (data: CarInterface) => {
  const exists = carsData.find((existingCar) => existingCar._id === data._id);

  if (!exists) {
    carsData.push(data);
  }
};
export const deleteFromCart = (data: CarInterface) => {
  const index = carsData.findIndex(
    (productInArray) => productInArray._id === data._id
  );
  if (index !== -1) carsData.splice(index, 1);

  return carsData;
};

export const carsInCart = () => {
  return carsData;
};
export default { addToCart, carsInCart };
