import { ICategoryRepository } from '../../../interfaces/ICategoryRepository';

export class DeleteCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(categoryId: string) {
    await this.categoryRepository.delete(categoryId);
  }
}
