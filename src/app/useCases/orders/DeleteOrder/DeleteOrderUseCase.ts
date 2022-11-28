import { IOrderRepository } from '../../../interfaces/IOrderRepository';

export class DeleteOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}
  async execute(orderId: string) {
    await this.orderRepository.delete(orderId);
  }
}
