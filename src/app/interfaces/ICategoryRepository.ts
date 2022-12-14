import { ICategory } from '../models/Category';

export interface ICategoryRepository {
  find(): Promise<ICategory[]>;
  create({ name, icon }: ICategory): Promise<ICategory>;
  delete(categoryId: string): Promise<void>;
}
