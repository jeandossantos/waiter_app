import {
  ChangeStatusProps,
  CreateOrderProps,
  IOrderRepository,
} from '../interfaces/IOrderRepository';
import { IOrder, Order } from '../models/Order';

export class OrderRepository implements IOrderRepository {
  async find(): Promise<IOrder[]> {
    const orders = await Order.find({})
      .populate('products.product')
      .sort({ createdAt: 1 });

    return orders;
  }

  async create({ table, products, status }: CreateOrderProps): Promise<IOrder> {
    const orders = new Order({
      table,
      products,
      status,
    });

    return await orders.save();
  }

  async changeStatus({ status, orderId }: ChangeStatusProps): Promise<void> {
    await Order.findOneAndUpdate(
      {
        _id: orderId,
      },
      {
        status,
      }
    );
  }

  async delete(orderId: string): Promise<void> {
    await Order.findOneAndDelete({ _id: orderId });
  }
}
