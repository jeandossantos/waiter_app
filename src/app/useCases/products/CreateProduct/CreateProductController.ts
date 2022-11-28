import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, description, price, category, ingredients } = req.body;
    const imagePath = req.file?.filename || '';

    const product = await this.createProductUseCase.execute({
      name,
      description,
      price: Number(price),
      category,
      ingredients,
      imagePath,
    });

    return res.status(201).json(product);
  }
}
