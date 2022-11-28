import { Category, ICategory } from '../models/Category';
import { ICategoryRepository } from '../interfaces/ICategoryRepository';

export class CategoryRepository implements ICategoryRepository {
  async create({ name, icon }: ICategory): Promise<ICategory> {
    const category = await Category.create({ name, icon });

    return await category.save();
  }

  async find() {
    const categories = await Category.find({});

    return categories;
  }

  async delete(categoryId: string): Promise<void> {
    await Category.findOneAndDelete({ _id: categoryId });
  }
}
