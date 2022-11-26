import { ICategory } from '../../../models/Category';
import { ICategoryRepository } from './ICategoryInterface';

export class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(): Promise<ICategory[]> {
    const categories = await this.categoryRepository.find();

    return categories;
  }
}
