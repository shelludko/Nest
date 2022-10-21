export interface IOrder {
  id: number;
  userId: number;
  totalPrice: number;
  createdDate: string;
  isPaid: boolean;
  cartId: number;
}
