import { Category } from '../../../models/Category';

export class CategoryRepository {
  async find() {
    const categories = await Category.find({});

    return categories;
  }
}
