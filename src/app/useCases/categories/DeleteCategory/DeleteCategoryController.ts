import { Request, Response } from 'express';
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase';

export class DeleteCategoryController {
  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) {}

  async handle(req: Request, res: Response) {
    const { categoryId } = req.params;

    await this.deleteCategoryUseCase.execute(categoryId);

    return res.status(204).send();
  }
}
