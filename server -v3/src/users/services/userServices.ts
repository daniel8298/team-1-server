import UserInterface from "../interfaces/UserInterface";
import { comparePassword, generateUserPassword } from "../helpers/bcrypt";
import dotenv from "dotenv";
import {
  getAllUsersFromMongoDb,
  inMongoDb,
  insertEditedUserToMongoDb,
  insertNewUserToMongoDb,
} from "../../dataAccessLayer/mongoDb";
import { generateToken, verifyToken } from "../../auth/jwt";
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
//מביא מערך של אובייקטים ממונגו
export const getUsers = async () => {
  try {
    const users = await getAllUsersFromMongoDb();
    if (users.length === 0) {
      throw new Error("No users in the database");
    }
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};
//מביא יוזר אחד עפ"י Id
export const getUser = async (id: string) => {
  try {
    const users = await getAllUsersFromMongoDb();
    const user = await users.filter((user) => user.id === id);
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};
//יוצר יוזר חדש
export const register = async (user: UserInterface) => {
  try {
    const users = await getAllUsersFromMongoDb();
    if (!user.email) {
      throw new Error("Please enter an email address");
    }
    const existingUser = users.find((user1) => {
      user1.email === user.email;
    });
    if (existingUser) {
      throw new Error("This user is already registered!");
    }
    const userReturn = await insertNewUserToMongoDb(user);
    console.log("User registered successfully:", userReturn);
    const token = generateToken(userReturn.id);
    return { userReturn, token };
  } catch (error) {
    console.error("Error during user registration:", error);
    return Promise.reject(error);
  }
};

//מעדכן יוזר
export const editUser = async (
  userId: string,
  userForUpdate: UserInterface
) => {
  try {
    // Find the user by userId and update it in the database
    const updatedUser = await insertEditedUserToMongoDb(userForUpdate, userId);
    if (!updatedUser) {
      throw new Error("Could not find user with this ID!");
    }
    return updatedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

//בודק אם יוזר נימצא במערכת
export const Login = async (email: string, password: string) => {
  try {
    const user = await inMongoDb(email);
    if (!user) {
      throw new Error("Could not find user with this email!");
    }
    if (!comparePassword(password, user.id)) {
      throw new Error("The password is incorrect!");
    }
    const token = generateToken(user.id);
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};
