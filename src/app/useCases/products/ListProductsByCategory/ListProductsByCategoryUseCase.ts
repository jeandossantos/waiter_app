import { IProductRepository } from '../../../interfaces/IProductRepository';

export class ListProductsByCategoryUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(categoryId: string) {
    const products = await this.productRepository.findByCategory(categoryId);

    return products;
  }
}
