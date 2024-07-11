import { Request, Response } from 'express';
import { ProductService } from '@/api/services';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public async getProducts(_req: Request, res: Response): Promise<Response> {
    return this.productService.getAllProducts(res);
  }

  public async createProduct(req: Request, res: Response): Promise<Response> {
    return this.productService.createProduct(req.body, res);
  }

  public async updateProduct(req: Request, res: Response): Promise<Response> {
    return this.productService.updateProduct(req.params.id, req.body, res);
  }

  public async deleteProduct(req: Request, res: Response): Promise<Response> {
    return this.productService.deleteProduct(req.params.id, res);
  }
}
