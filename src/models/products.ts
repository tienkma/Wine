interface Rating {
  average: number;
  reviews: number | string;
}

export interface ProductEntity {
  winery: string;
  discount?: string;
  wine: string;
  rating: Rating;
  image: string;
  price: string | number;
  description: string;
  _id: string | number;
  available: string | number;
}

export interface CommentEntity {
  id: string | number;
  name: string;
  comment: string;
  createdAt: Date;
}
