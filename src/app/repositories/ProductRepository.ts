import { IProductRepository } from '../interfaces/IProductRepository';
import { Product } from '../models/Product';

export class ProductRepository implements IProductRepository {
  async find() {
    const products = await Product.find({});

    return products;
  }
}
