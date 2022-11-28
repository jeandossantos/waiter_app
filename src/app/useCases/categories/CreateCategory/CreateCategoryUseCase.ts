import { ICategoryRepository } from '../../../interfaces/ICategoryRepository';
import { z } from 'zod';

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(name: string, icon: string) {
    const categorySchema = z.object({
      name: z.string().min(2),
      icon: z.string().min(1),
    });

    let category = categorySchema.parse({ name, icon });

    category = await this.categoryRepository.create({ ...category });

    return category;
  }
}
