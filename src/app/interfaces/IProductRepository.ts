import { IProduct } from '../models/Product';

export type CreateProductProps = Omit<IProduct, 'category' | '_id'> & {
  category: string;
};

export interface IProductRepository {
  find(): Promise<IProduct[]>;
  create({
    name,
    category,
    description,
    imagePath,
    price,
    ingredients,
  }: CreateProductProps): Promise<IProduct>;
  findByCategory: (productId: string) => Promise<IProduct[]>;
  delete(productId: string): Promise<void>;
}
