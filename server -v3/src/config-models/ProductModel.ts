import mongoose, { Document } from "mongoose";
import CarInterface from "../products/interfaces/ProductInterface";

const ProductSchema = new mongoose.Schema<CarInterface>({
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

const Product = mongoose.model<CarInterface>("Product", ProductSchema);

export default Product;
