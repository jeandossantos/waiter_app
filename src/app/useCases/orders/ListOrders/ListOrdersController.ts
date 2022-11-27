import { Request, Response } from 'express';
import { ListOrdersUseCase } from './ListOrdersUseCase';

export class ListOrdersController {
  constructor(private listOrdersUseCase: ListOrdersUseCase) {}

  async handle(req: Request, res: Response) {
    const orders = await this.listOrdersUseCase.execute();

    res.status(200).json(orders);
  }
}
