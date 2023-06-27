export interface CartEntity {
  winery: string;
  discount?: string;
  wine: string;
  image: string;
  price: string | number;
  _id: string | number;
  available: string | number;
  quantity: number;
  Subtotal: number;
}
