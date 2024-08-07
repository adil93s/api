/**
 * Global Import from Routes
 */
import { Router, Express } from 'express';

import { productRouter } from './ProductRouter';

export const globalRouter = (app: Express): void => {
  const router = Router();

  /**
   * Sample Route
   */
  router.get('/', (_req, res) => {
    return res.send('Hello World!');
  });
  app.use('/', router);

  /**
   * Import Other Routes
   */
  app.use('/product', productRouter);
};
