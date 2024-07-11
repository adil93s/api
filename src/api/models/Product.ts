import mongoose from "mongoose";
import { ProductDocument } from "@/api/interfaces";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  warranty_years: {
    type: Number,
    required: false,
  },
  available: {
    type: Boolean,
    required: false,
  },
});

export const ProductModel = mongoose.model<ProductDocument>(
  "Product",
  productSchema
);
