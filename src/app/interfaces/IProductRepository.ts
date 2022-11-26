import { IProduct } from '../models/Product';

export interface IProductRepository {
  find(): Promise<IProduct[]>;
  create({
    name,
    category,
    description,
    imagePath,
    price,
    ingredients,
  }: Omit<IProduct, 'category'> & {
    category: string;
  }): Promise<IProduct>;
  findByCategory: (categoryId: string) => Promise<IProduct[]>;
}
