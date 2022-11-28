import { CustomException } from '../../../exceptions/CustomException';
import { IProductRepository } from '../../../interfaces/IProductRepository';
import { z } from 'zod';

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

  async execute(props: ICreateProductUseCase) {
    const productSchema = z.object({
      name: z.string().min(2),
      category: z.string(),
      description: z.string().min(1),
      imagePath: z.string().min(5),
      price: z.number().default(0),
      ingredients: z.string(),
    });

    const { name, category, description, imagePath, price, ingredients } =
      productSchema.parse(props);

    let myIngredients;

    try {
      myIngredients = ingredients.trim() ? JSON.parse(ingredients) : [];
    } catch (error) {
      console.log(error);
      throw new CustomException(
        'It was not possible to parse "ingredients" to JSON.'
      );
    }

    const isIngredientFormatValid =
      (myIngredients &&
        typeof myIngredients[0] === 'object' &&
        'name' in myIngredients[0] &&
        'icon' in myIngredients[0]) ||
      [];

    if (!isIngredientFormatValid) {
      throw new CustomException(
        'the ingredient property must have an object containing name and icon properties.'
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
