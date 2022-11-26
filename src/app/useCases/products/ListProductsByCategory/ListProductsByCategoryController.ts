import { Request, Response } from 'express';
import { ListProductsByCategoryUseCase } from './ListProductsByCategoryUseCase';

export class ListProductsByCategoryController {
  constructor(
    private listProductsByCategoryUseCase: ListProductsByCategoryUseCase
  ) {}

  async handle(req: Request, res: Response) {
    const categoryId = req.params.categoryId;

    const products = await this.listProductsByCategoryUseCase.execute(
      categoryId
    );

    return res.json(products);
  }
}
