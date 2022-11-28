import { IProductRepository } from '../../../interfaces/IProductRepository';

export class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(productId: string) {
    await this.productRepository.delete(productId);
  }
}
