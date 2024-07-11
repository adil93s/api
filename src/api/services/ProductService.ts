import { ProductDocument } from '@/api/interfaces';
import { ProductModel } from '@/api/models';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { io } from '@/config/websocket';

export class ProductService {
  public async createProduct(productData: ProductDocument, res: Response): Promise<Response> {
    try {
      const product = new ProductModel(productData);
      await product.save();
      io.emit('productCreated', product);
      return res.status(StatusCodes.CREATED).json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
      }
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'An unknown error occurred' });
    }
  }

  public async getAllProducts(res: Response): Promise<Response> {
    try {
      const products = await ProductModel.find();
      return res.status(StatusCodes.OK).json(products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
      }
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'An unknown error occurred' });
    }
  }

  public async updateProduct(id: string, productData: ProductDocument, res: Response): Promise<Response> {
    try {
      const product = await ProductModel.findByIdAndUpdate(id, productData, { new: true });
      if (product) {
        io.emit('productUpdated', product);
        return res.status(StatusCodes.OK).json(product);
      } else {
        return res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
      }
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'An unknown error occurred' });
    }
  }

  public async deleteProduct(id: string, res: Response): Promise<Response> {
    try {
      const product = await ProductModel.findByIdAndDelete(id);
      if (product) {
        io.emit('productDeleted', id);
        return res.status(StatusCodes.OK).json({ message: 'Product deleted' });
      } else {
        return res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
      }
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'An unknown error occurred' });
    }
  }
}
