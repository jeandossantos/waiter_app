import { ICategoryRepository } from '../../../interfaces/ICategoryRepository';

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(name: string, icon: string) {
    const category = await this.categoryRepository.create({ name, icon });

    return category;
  }
}
