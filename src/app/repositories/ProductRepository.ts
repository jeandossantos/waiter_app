import {
  CreateProductProps,
  IProductRepository,
} from '../interfaces/IProductRepository';
import { Product } from '../models/Product';

export class ProductRepository implements IProductRepository {
  async create({
    name,
    category,
    description,
    imagePath,
    price,
    ingredients,
  }: CreateProductProps) {
    const product = new Product({
      name,
      category,
      description,
      imagePath,
      price,
      ingredients,
    });

    return await product.save();
  }

  async find() {
    const products = await Product.find({});

    return products;
  }

  async findByCategory(productId: string) {
    const products = await Product.find({}).where('category', productId);

    return products;
  }

  async delete(productId: string): Promise<void> {
    await Product.findOneAndDelete({ _id: productId });
  }
}
