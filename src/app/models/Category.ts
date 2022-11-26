import { model, Schema, Document } from 'mongoose';

export interface ICategory {
  name: string;
  icon: string;
}

export const Category = model<ICategory>(
  'Category',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  })
);
