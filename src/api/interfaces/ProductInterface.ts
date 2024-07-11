import { Document } from 'mongoose';

interface IProduct {
  name?: string;
  type?: string;
  price?: number;
  rating?: number;
  warranty_years?: number;
  available?: boolean;
}

export interface ProductDocument extends IProduct, Document {}
