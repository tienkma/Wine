import { CartEntity } from "./cart";

export interface OrderEntity extends CartEntity{
    totalPrice: number
    status: number
    products: CartEntity[]
}