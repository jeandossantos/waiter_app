import { CategoryRepository } from './categories/ListCategoriesUseCase/CategoryRepository';
import { ListCategoriesController } from './categories/ListCategoriesUseCase/ListCategoriesController';
import { ListCategoriesUseCase } from './categories/ListCategoriesUseCase/ListCategoriesUseCase';

const categoryRepository = new CategoryRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
