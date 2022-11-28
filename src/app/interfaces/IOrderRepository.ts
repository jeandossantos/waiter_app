import { IOrder } from '../models/Order';

export type CreateOrderProps = Pick<IOrder, 'table' | 'status'> & {
  products: [{ product: string; quantity: number }];
};

export type ChangeStatusProps = { status: string; orderId: string };

export interface IOrderRepository {
  find(): Promise<IOrder[]>;
  create({ table, products, status }: CreateOrderProps): Promise<IOrder>;
  changeStatus({ status, orderId }: ChangeStatusProps): Promise<void>;
  delete(orderId: string): Promise<void>;
}
