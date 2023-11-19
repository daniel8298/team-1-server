import express from "express";
import {
  handleGetCars,
  handleGetCarByCategory,
  handleGetCarModel,
  handleGetTopFiveModels,
} from "../controllers/productController";
const router = express.Router();

router.get("/", handleGetCars);
router.get("/model/:model", handleGetCarModel);
router.get("/topFive", handleGetTopFiveModels);
router.get("/:category", handleGetCarByCategory);

export default router;
