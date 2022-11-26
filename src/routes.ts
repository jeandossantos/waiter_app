import { Router } from 'express';
import {
  createCategoryController,
  listCategoriesController,
  listProductsController,
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
