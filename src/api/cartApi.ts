import type { BookType } from '../store/slices/bookSlice';
import { axiosInstance } from '../api';

export type ProductType = {
  book: BookType;
  bookId: number;
  cartProductId: number;
  countBook: number;
};

const getAll = async () => {
  const response = await axiosInstance.get<{ cartBooks: ProductType[] }>('/cart');
  return response.data;
};

const addById = async (bookId: number) => {
  const response = await axiosInstance.post<{ cartProduct: ProductType }>('/cart/add', { bookId });
  return response.data;
};

const deleteById = async (bookId: number) => {
  const response = await axiosInstance.delete(`/cart/${bookId}`);
  return response.data;
};

const changeQuantity = async (bookId: number, quantity: number) => {
  const response = await axiosInstance.patch(`/cart/${bookId}`, { quantity });
  return response.data;
};

export default {
  getAll,
  deleteById,
  addById,
  changeQuantity,
};
