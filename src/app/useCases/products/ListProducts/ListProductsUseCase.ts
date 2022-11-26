import { IProductRepository } from '../../../interfaces/IProductRepository';

export class ListProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute() {
    const products = await this.productRepository.find();

    return products;
  }
}
