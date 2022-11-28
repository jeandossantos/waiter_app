import { IOrderRepository } from '../../../interfaces/IOrderRepository';
import { IOrder } from '../../../models/Order';
import { z } from 'zod';

export type CreateOrderUseCaseProps = Pick<IOrder, 'table' | 'status'> & {
  products: [{ product: string; quantity: number }];
};

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(props: CreateOrderUseCaseProps) {
    const orderSchema = z.object({
      table: z.string().min(1),
      status: z.enum(['WAITING', 'IN_PROGRESS', 'DONE']).default('WAITING'),
      products: z.tuple([
        z.object({
          product: z.string().min(5),
          quantity: z.number().min(1),
        }),
      ]),
    });

    const { table, status, products } = orderSchema.parse(props);

    const order = await this.orderRepository.create({
      table,
      status,
      products,
    });

    return order;
  }
}
