import { OrderRepository } from '../../../repositories/OrderRepository';

export class DeleteOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}
  async execute(orderId: string) {
    await this.orderRepository.delete(orderId);
  }
}
