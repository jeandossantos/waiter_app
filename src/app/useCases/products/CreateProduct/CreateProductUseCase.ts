import { CustomException } from '../../../exceptions/CustomException';
import { IProductRepository } from '../../../interfaces/IProductRepository';

interface ICreateProductUseCase {
  name: string;
  category: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: string;
}
export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute({
    name,
    category,
    description,
    imagePath,
    price,
    ingredients,
  }: ICreateProductUseCase) {
    let myIngredients;

    try {
      myIngredients = ingredients.trim() ? JSON.parse(ingredients) : [];
    } catch {
      throw new CustomException(
        'It was not possible to parse "ingredients" to JSON.'
      );
    }

    const product = await this.productRepository.create({
      name,
      category,
      description,
      imagePath,
      price,
      ingredients: myIngredients,
    });

    return product;
  }
}
