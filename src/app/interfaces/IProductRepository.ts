import { IProduct } from '../models/Product';

export interface IProductRepository {
  find(): Promise<IProduct[]>;
  //create({}: IProduct): Promise<IProduct>;
}
