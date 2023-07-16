import { CartEntity } from "./cart";

export interface OrderEntity extends CartEntity {
  total: number;
  status: number;
  products: CartEntity[];
}
