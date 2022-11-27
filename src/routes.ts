import { Router } from 'express';
import { upload } from './app/config/multer';

import {
  createCategoryController,
  listCategoriesController,
  listProductsController,
  createProductController,
  listProductsByCategoryController,
  listOrdersController,
  createOrderController,
} from './app/useCases';

export const routes = Router();

routes.get('/categories', (req, res) => {
  return listCategoriesController.handle(req, res);
});

routes.post('/categories', (req, res) => {
  return createCategoryController.handle(req, res);
});

routes.get('/products', (req, res) => {
  return listProductsController.handle(req, res);
});

routes.get('/categories/:categoryId/products', (req, res) => {
  return listProductsByCategoryController.handle(req, res);
});

routes.post('/products', upload.single('image'), (req, res) => {
  return createProductController.handle(req, res);
});

routes.post('/orders', (req, res) => {
  return createOrderController.handle(req, res);
});

routes.get('/orders', (req, res) => {
  return listOrdersController.handle(req, res);
});
