import { model, Schema } from 'mongoose';
import { IProduct } from './Product';

export interface IOrder {
  _id: string;
  table: string;
  status: 'WAITING' | 'IN_PROGRESS' | 'DONE';
  product: IProduct[];
  createdAt: Date;
}

export const Order = model<IOrder>(
  'Order',
  new Schema({
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['WAITING', 'IN_PROGRESS', 'DONE'],
      default: 'WAITING',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    product: {
      required: true,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            default: 1,
          },
        },
      ],
    },
  })
);
