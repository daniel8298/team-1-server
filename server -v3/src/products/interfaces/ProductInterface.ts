interface CarInterface {
  brand: string;
  model: string;
  year: number;
  imageUrl: string;
  category: string;
  price: number;
  numOfWheels: number;
  numOfDoors: number;
  wheelSize: number;
  color: string;
  specs: {
    engine: string;
    transmission: string;
    horsepower: number;
  };
  clicks: number;
}
export default CarInterface;
