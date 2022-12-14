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
  changeOrderStatusController,
  deleteOrderController,
  deleteCategoryController,
  deleteProductController,
} from './app/useCases';

export const routes = Router();

routes.get('/categories', (req, res) => {
  return listCategoriesController.handle(req, res);
});

routes.post('/categories', (req, res) => {
  return createCategoryController.handle(req, res);
});

routes.delete('/categories/:categoryId', (req, res) => {
  return deleteCategoryController.handle(req, res);
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

routes.delete('/products/:productId', upload.single('image'), (req, res) => {
  return deleteProductController.handle(req, res);
});

routes.post('/orders', (req, res) => {
  return createOrderController.handle(req, res);
});

routes.get('/orders', (req, res) => {
  return listOrdersController.handle(req, res);
});

routes.patch('/orders/:orderId', (req, res) => {
  return changeOrderStatusController.handle(req, res);
});

routes.delete('/orders/:orderId', (req, res) => {
  return deleteOrderController.handle(req, res);
});
