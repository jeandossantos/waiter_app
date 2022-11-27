import { Request, Response } from 'express';
import { CreateOrderUseCase } from './CreateOrderUseCase';

export class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(req: Request, res: Response) {
    const { table, products, status } = req.body;

    const order = await this.createOrderUseCase.execute({
      table,
      products,
      status,
    });

    return res.status(201).json(order);
  }
}
