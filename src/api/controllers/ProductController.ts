import { Request, Response } from "express";

export const productController = {
  /**
   * Get /products
   *
   * Get All Products
   */
  getProducts: (_req: Request, res: Response) => {
    return res.send({ message: "All Products Fetch" });
  },
};
