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

const getAll = async () => {
  const response = await axiosInstance.get<{ cartBooks: CartType }>('/cart');
  return response.data;
};

const addById = async (bookId: number) => {
  const response = await axiosInstance.post<{ updatedData: ProductType }>('/cart/add', { params: { bookId } });
  return response.data;
};

const delById = async (bookId: number) => {
  const response = await axiosInstance.delete<{ updatedData: ProductType }>('/cart/delete', { data: { bookId } });
  return response.data;
};

const changeQuantity = async (bookId: number, quantity: number) => {
  const response = await axiosInstance.patch('/cart/update', { bookId, quantity });
  return response.data;
};

export default {
  getAll,
  delById,
  addById,
  changeQuantity,
};
