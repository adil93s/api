import { Router } from 'express';
import { ProductController } from '@/api/controllers';
import { authMiddleware } from '@/api/middlewares/AuthMiddleware';

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/', authMiddleware, (req, res) => productController.getProducts(req, res));
productRouter.post('/', authMiddleware, (req, res) => productController.createProduct(req, res));
productRouter.patch('/:id', authMiddleware, (req, res) => productController.updateProduct(req, res));
productRouter.delete('/:id', authMiddleware, (req, res) => productController.deleteProduct(req, res));

export { productRouter };
