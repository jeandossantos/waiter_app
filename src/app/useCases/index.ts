import { CategoryRepository } from '../repositories/CategoryRepository';
import { OrderRepository } from '../repositories/OrderRepository';
import { ProductRepository } from '../repositories/ProductRepository';
import { CreateCategoryController } from './categories/CreateCategory/CreateCategoryController';
import { CreateCategoryUseCase } from './categories/CreateCategory/CreateCategoryUseCase';
import { ListCategoriesController } from './categories/ListCategories/ListCategoriesController';
import { ListCategoriesUseCase } from './categories/ListCategories/ListCategoriesUseCase';
import { ChangeOrderStatusController } from './orders/ChangeOrderStatus/ChangeOrderStatusController';
import { ChangeOrderStatusUseCase } from './orders/ChangeOrderStatus/ChangeOrderStatusUseCase';
import { CreateOrderController } from './orders/CreateOrder/CreateOrderController';
import { CreateOrderUseCase } from './orders/CreateOrder/CreateOrderUseCase';
import { ListOrdersController } from './orders/ListOrders/ListOrdersController';
import { ListOrdersUseCase } from './orders/ListOrders/ListOrdersUseCase';
import { CreateProductController } from './products/CreateProduct/CreateProductController';
import { CreateProductUseCase } from './products/CreateProduct/CreateProductUseCase';
import { ListProductsController } from './products/ListProducts/ListProductsController';
import { ListProductsUseCase } from './products/ListProducts/ListProductsUseCase';
import { ListProductsByCategoryController } from './products/ListProductsByCategory/ListProductsByCategoryController';
import { ListProductsByCategoryUseCase } from './products/ListProductsByCategory/ListProductsByCategoryUseCase';

const categoryRepository = new CategoryRepository();
const productRepository = new ProductRepository();
const orderRepository = new OrderRepository();

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

const listOrdersUseCase = new ListOrdersUseCase(orderRepository);
const listOrdersController = new ListOrdersController(listOrdersUseCase);

const createOrderUseCase = new CreateOrderUseCase(orderRepository);
const createOrderController = new CreateOrderController(createOrderUseCase);

const changeOrderStatusUseCase = new ChangeOrderStatusUseCase(orderRepository);
const changeOrderStatusController = new ChangeOrderStatusController(
  changeOrderStatusUseCase
);

export {
  listCategoriesController,
  createCategoryController,
  listProductsController,
  createProductController,
  listProductsByCategoryController,
  listOrdersController,
  createOrderController,
  changeOrderStatusController,
};
