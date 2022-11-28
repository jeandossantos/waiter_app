import { Request, Response } from 'express';
import { DeleteOrderUseCase } from './DeleteOrderUseCase';

export class DeleteOrderController {
  constructor(private DeleteOrderUseCase: DeleteOrderUseCase) {}

  async handle(req: Request, res: Response) {
    const orderId = req.params.orderId;

    await this.DeleteOrderUseCase.execute(orderId);

    return res.send();
  }
}
