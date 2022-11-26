import { Router } from 'express';
import { listCategoriesController } from './app/useCases';

export const routes = Router();

routes.get('/categories', (req, res) => {
  return listCategoriesController.handle(req, res);
});
