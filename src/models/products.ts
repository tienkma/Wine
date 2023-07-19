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
  price: number;
  description: string;
  _id: string;
  available: string | number;
}

export interface CommentEntity {
  _id: string;
  user: {
    name: string;
    userId: string;
  };
  content: string;
  createdAt: Date;
  currentId?: string;
}
