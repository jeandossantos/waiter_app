import { IOrder } from '../models/Order';

export type CreateOrderProps = Pick<IOrder, 'table' | 'status'> & {
  products: [{ product: string; quantity: number }];
};

export interface IOrderRepository {
  find(): Promise<IOrder[]>;
  create({ table, products, status }: CreateOrderProps): Promise<IOrder>;
}
