import { Category } from '../../../models/Category';
import { ICategoryRepository } from './ICategoryInterface';

export class CategoryRepository implements ICategoryRepository {
  async find() {
    const categories = await Category.find({});

    return categories;
  }
}
