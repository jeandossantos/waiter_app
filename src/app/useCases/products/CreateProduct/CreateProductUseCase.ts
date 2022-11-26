import { ProductRepository } from '../../../repositories/ProductRepository';

interface ICreateProductUseCase {
  name: string;
  category: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: [
    {
      name: string;
      icon: string;
    }
  ];
}
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    name,
    category,
    description,
    imagePath,
    price,
    ingredients,
  }: ICreateProductUseCase) {
    const product = await this.productRepository.create({
      name,
      category,
      description,
      imagePath,
      price,
      ingredients,
    });

    return product;
  }
}
