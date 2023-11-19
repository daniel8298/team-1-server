import mongoose from "mongoose";
import User from "../config-models/UserModel";
import Product from "../config-models/ProductModel";
import UserInterface from "../users/interfaces/UserInterface";
import CarInterface from "../products/interfaces/ProductInterface";
const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@project0api.6qm7wiw.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

//מביא את כל היוזרים ממונגו דיבי
export const getAllUsersFromMongoDb = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};

//מכניס יוזר חדש לדאטהבייס
export const insertNewUserToMongoDb = async (user: UserInterface) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

//מעדכן יוזר חדש
export const insertEditedUserToMongoDb = async (
  user: UserInterface,
  id: string
) => {
  try {
    const editedUser = await User.findByIdAndUpdate(
      id,
      user,
      { new: true } // Return the updated document
    );
    return editedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

//בודק אם יוזר נימצא בדאטה בייס
export const inMongoDb = async (email: string) => {
  try {
    const user = await User.findOne({ email }).exec();
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};
//////////////////////////
//דאל של פרודוקטס
//מביא את כל הפרודוקטס ממונגו דיבי
export const getAllProductsFromMongoDb = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const insertEditedProductToMongoDb = async (
  user: CarInterface,
  id: string
) => {
  try {
    const editedProduct = await Product.findByIdAndUpdate(
      id,
      user,
      { new: true } // Return the updated document
    );
    return editedProduct;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default connectToDatabase;
