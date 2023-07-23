export interface CartEntity {
  winery: string;
  discount?: string;
  wine: string;
  image: string;
  price: string | number;
  _id: string;
  available: string | number;
  quantity: number;
  subtotal: number;
  createdAt: string | Date;
}
