import type { BookType } from '../store/slices/bookSlice';

import { axiosInstance } from '../api';

export type CartType = {
  cartId: number;
  selectedProducts: ProductType[];
};

export type ProductType = {
  book: BookType;
  bookId: number;
  cartProductId: number;
  countBook: number;
};

const getAllFromCart = async (userId: number) => {
  const response = await axiosInstance.get<{ cartBooks: CartType }>('cart/get-all', { params: { userId } });
  return response.data;
};

const addingProductQuantity = async (bookId: number, userId: number, cartId: number) => {
  const response = await axiosInstance.post<{ updatedData: ProductType }>(`cart/${userId}/adding-quantity`, { params: { bookId, cartId } });
  return response.data;
};

const deletingQuantity = async (bookId: number, userId: number, cartId: number) => {
  const response = await axiosInstance.delete<{ updatedData: ProductType }>(`cart/${userId}/delete-quantity`, { params: { bookId, cartId } });
  return response.data;
};

const addToCart = async (bookId: number, userId: number) => {
  const response = await axiosInstance.post<{ cartBooks: CartType }>(`cart/${userId}/add-book-to-cart`, { bookId });
  return response.data;
};

const deleteFromCart = async (bookId: number, userId: number, cartId: number) => {
  const response = await axiosInstance.delete<{ updatedData: ProductType }>(`cart/${userId}/delete-from-cart`, { data: { bookId, cartId } });
  return response.data;
};

export default {
  getAllFromCart,
  addingProductQuantity,
  deletingQuantity,
  addToCart,
  deleteFromCart,
};
