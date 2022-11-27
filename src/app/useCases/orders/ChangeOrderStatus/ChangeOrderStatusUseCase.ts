import { CustomException } from '../../../exceptions/CustomException';
import { OrderRepository } from '../../../repositories/OrderRepository';

type ChangeOrderStatusUseCaseProps = { status: string; orderId: string };

export class ChangeOrderStatusUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({ status, orderId }: ChangeOrderStatusUseCaseProps) {
    const isStatusValid = ['WAITING', 'IN_PROGRESS', 'DONE'].includes(status);

    if (!isStatusValid) {
      throw new CustomException(
        `"${status}" is not a status valid! The status must be one of these WAITING, IN_PROGRESS or DONE.`
      );
    }

    await this.orderRepository.changeStatus({
      status,
      orderId,
    });
  }
}
