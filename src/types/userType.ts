import type { ProductType } from '../api/cartApi';
import type { BookType } from '../store/slices/bookSlice';

export type UserType = {
  email: string;
  userId: number;
  fullName?: string | null;
  avatar?: string | null;
  favoriteBooks: BookType[];
  cartProducts: ProductType[];
};
