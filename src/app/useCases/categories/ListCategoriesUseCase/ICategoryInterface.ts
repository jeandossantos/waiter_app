import { ICategory } from '../../../models/Category';

export interface ICategoryRepository {
  find(): Promise<ICategory[]>;
}
