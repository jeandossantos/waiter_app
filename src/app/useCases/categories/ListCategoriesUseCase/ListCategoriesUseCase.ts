import { CategoryRepository } from './CategoryRepository';

export class ListCategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute() {
    const categories = await this.categoryRepository.find();

    return categories;
  }
}
