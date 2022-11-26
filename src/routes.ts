import { Router } from 'express';
import {
  createCategoryController,
  listCategoriesController,
} from './app/useCases';

export const routes = Router();

routes.get('/categories', (req, res) => {
  return listCategoriesController.handle(req, res);
});

routes.post('/categories', (req, res) => {
  return createCategoryController.handle(req, res);
});
