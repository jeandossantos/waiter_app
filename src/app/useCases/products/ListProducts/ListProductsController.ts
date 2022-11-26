import { Request, Response } from 'express';
import { ListProductsUseCase } from './ListProductsUseCase';

export class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) {}

  async handle(req: Request, res: Response) {
    const products = await this.listProductsUseCase.execute();

    return res.json(products);
  }
}
