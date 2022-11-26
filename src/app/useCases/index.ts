import { CategoryRepository } from '../repositories/CategoryRepository';
import { CreateCategoryController } from './categories/CreateCategory/CreateCategoryController';
import { CreateCategoryUseCase } from './categories/CreateCategory/CreateCategoryUseCase';
import { ListCategoriesController } from './categories/ListCategories/ListCategoriesController';
import { ListCategoriesUseCase } from './categories/ListCategories/ListCategoriesUseCase';

const categoryRepository = new CategoryRepository();

const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { listCategoriesController, createCategoryController };
