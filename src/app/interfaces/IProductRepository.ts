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
  }: Omit<IProduct, 'category' | '_id'> & {
    category: string;
  }): Promise<IProduct>;
}
