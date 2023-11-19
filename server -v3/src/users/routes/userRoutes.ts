import express, { Router } from "express";
import {
  handleGetUsers,
  handleUserRegistration,
  handleGetById,
  handleEditUserById,
  handleLogin,
} from "../controllers/userControllers";

const router = express.Router();

router.get("/", handleGetUsers);
router.post("/registration", handleUserRegistration);
router.get("/:id", handleGetById);
router.put("/:id", handleEditUserById);
router.post("/login", handleLogin);
export default router;
