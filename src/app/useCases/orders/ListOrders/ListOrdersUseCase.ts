import { IOrderRepository } from '../../../interfaces/IOrderRepository';

export class ListOrdersUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute() {
    const orders = await this.orderRepository.find();

    return orders;
  }
}
