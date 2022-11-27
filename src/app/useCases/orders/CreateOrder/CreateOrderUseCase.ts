import { IOrderRepository } from '../../../interfaces/IOrderRepository';
import { IOrder } from '../../../models/Order';

export type CreateOrderUseCaseProps = Pick<IOrder, 'table' | 'status'> & {
  products: [{ product: string; quantity: number }];
};

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute({ table, products, status }: CreateOrderUseCaseProps) {
    const order = await this.orderRepository.create({
      table,
      status,
      products,
    });

    return order;
  }
}
