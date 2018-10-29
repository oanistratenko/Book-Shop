import { CartItemModel } from '../../cart/models/cart-item.model';

export class OrderModel {
  orderId: number;
  name: string;
  email: string;
  phone: string;
  products: Array<CartItemModel>;
  totalQuantity: number;
  totalSum: number;
  ddate?: Date;
}
