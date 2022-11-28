import { Request, Response } from 'express';
import { DeleteProductUseCase } from './DeleteProductUseCase';

export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}

  async handle(req: Request, res: Response) {
    const { productId } = req.params;

    await this.deleteProductUseCase.execute(productId);

    return res.status(204).send();
  }
}
