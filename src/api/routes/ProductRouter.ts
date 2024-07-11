import { Router } from "express";

import { productController } from "@/api/controllers";

const userRouter = Router();

userRouter.get("/", productController.getProducts);

export { userRouter };
