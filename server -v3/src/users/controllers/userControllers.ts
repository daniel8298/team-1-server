import { Request, Response } from "express";
import mongoose from "mongoose";
import UserInterface from "../interfaces/UserInterface";
import {
  getUsers,
  getUser,
  register,
  editUser,
  Login,
} from "../services/userServices";
import { handleError } from "../../utils/handleErrors";
import logInterface from "../interfaces/logInterface";

// מקבלת יוזרים מסרביס ושולחת כ res
export const handleGetUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    if (error instanceof Error && error.message.match(/You must be/g)) {
      handleError(res, error, 403);
    } else if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

// מקבל יוזר מהסרביס ומעביר הלאה
export const handleGetById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    res.json(user);
  } catch (error) {
    if (error instanceof Error && error.message.match(/You must be/g)) {
      handleError(res, error, 403);
    } else if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

// מטפל בבקשת פוסט ליצירת משתמש חדש
export const handleUserRegistration = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req.body;
    const userFromDB = await register(user);
    res.status(200).json(userFromDB);
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

// מטפל בבקשת פוט לעדכון משתמש
export const handleEditUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const userForUpdate = req.body;
    const updatedUser = await editUser(id, userForUpdate);
    res.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

// מטפל בהתחברות משתמש
export const handleLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const log: logInterface = req.body;
    if (log) {
      const email = log.email;
      const password = log.password;
      const token = await Login(email, password);
      if (token) {
        res.status(200).send(token);
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      throw new Error("log not found!");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
