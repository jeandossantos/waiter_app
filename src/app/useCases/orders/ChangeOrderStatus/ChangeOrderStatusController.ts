import { Request, Response } from 'express';
import { ChangeOrderStatusUseCase } from './ChangeOrderStatusUseCase';

export class ChangeOrderStatusController {
  constructor(private changeOrderStatusUseCase: ChangeOrderStatusUseCase) {}

  async handle(req: Request, res: Response) {
    const { orderId } = req.params;
    const { status } = req.body;

    await this.changeOrderStatusUseCase.execute({ orderId, status });

    res.sendStatus(204);
  }
}
