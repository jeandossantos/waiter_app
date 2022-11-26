import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, icon } = req.body;

    const category = await this.createCategoryUseCase.execute(name, icon);

    return res.json(category);
  }
}
