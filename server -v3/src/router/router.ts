import express, { Request, Response } from "express";
const router = express.Router();
import userRoutes from "../users/routes/userRoutes";
import productRouts from "../products/routes/productRoutes";
router.use("/users", userRoutes);
router.use("/products", productRouts);

router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Page not found!")
);

export default router;
