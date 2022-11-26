import { CategoryRepository } from '../repositories/CategoryRepository';
import { ProductRepository } from '../repositories/ProductRepository';
import { CreateCategoryController } from './categories/CreateCategory/CreateCategoryController';
import { CreateCategoryUseCase } from './categories/CreateCategory/CreateCategoryUseCase';
import { ListCategoriesController } from './categories/ListCategories/ListCategoriesController';
import { ListCategoriesUseCase } from './categories/ListCategories/ListCategoriesUseCase';
import { CreateProductController } from './products/CreateProduct/CreateProductController';
import { CreateProductUseCase } from './products/CreateProduct/CreateProductUseCase';
import { ListProductsController } from './products/ListProducts/ListProductsController';
import { ListProductsUseCase } from './products/ListProducts/ListProductsUseCase';
import { ListProductsByCategoryController } from './products/ListProductsByCategory/ListProductsByCategoryController';
import { ListProductsByCategoryUseCase } from './products/ListProductsByCategory/ListProductsByCategoryUseCase';

const categoryRepository = new CategoryRepository();
const productRepository = new ProductRepository();

const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

const listProductsUseCase = new ListProductsUseCase(productRepository);
const listProductsController = new ListProductsController(listProductsUseCase);

const createProductUseCase = new CreateProductUseCase(productRepository);
const createProductController = new CreateProductController(
  createProductUseCase
);

const listProductsByCategoryUseCase = new ListProductsByCategoryUseCase(
  productRepository
);
const listProductsByCategoryController = new ListProductsByCategoryController(
  listProductsByCategoryUseCase
);

export {
  listCategoriesController,
  createCategoryController,
  listProductsController,
  createProductController,
  listProductsByCategoryController,
};
