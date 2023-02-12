import type { BookType } from '../store/slices/bookSlice';

import { axiosInstance } from '../api';

const getAllFromCart = async (userId: number) => {
  const response = await axiosInstance.get<{ books: BookType[] }>('cart/get-all', { params: { userId } });
  return response.data;
};

const addingProductQuantity = async (bookId: number, userId: number) => {
  const response = await axiosInstance.post<{ count: string; bookId: string; price: string }>(`cart/${userId}/adding-quantity`, { params: { bookId } });
  return response.data;
};

const deletingQuantity = async (bookId: number, userId: number) => {
  const response = await axiosInstance.post<{ count: string; bookId: string; price: string }>(`cart/${userId}/delete-quantity`, { params: { bookId } });
  return response.data;
};

const addToCart = async (bookId: number, userId: number) => {
  const response = await axiosInstance.post<{ message: string }>(`cart/${userId}/add-book-to-cart`, { bookId });
  return response.data;
};

const deleteFromCart = async (bookId: number, userId: number) => {
  const response = await axiosInstance.delete<{ message: string }>(`cart/${userId}/delete-from-cart`, { data: { bookId } });
  return response.data;
};

export default {
  getAllFromCart,
  addingProductQuantity,
  deletingQuantity,
  addToCart,
  deleteFromCart,
};
