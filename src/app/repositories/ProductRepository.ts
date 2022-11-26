import { IProductRepository } from '../interfaces/IProductRepository';
import { IProduct, Product } from '../models/Product';

export class ProductRepository implements IProductRepository {
  async create({
    name,
    category,
    description,
    imagePath,
    price,
    ingredients,
  }: Omit<IProduct, 'category' | '_id'> & {
    category: string;
  }) {
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

  async findByCategory(categoryId: string) {
    const products = await Product.find({}).where('category', categoryId);

    return products;
  }
}
