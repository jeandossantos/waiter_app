import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { Request, Response } from 'express';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(req: Request, res: Response) {
    const categories = await this.listCategoriesUseCase.execute();

    return res.json(categories);
  }
}
