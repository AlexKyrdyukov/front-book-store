import type { BookType } from '../store/slices/bookSlice';
import axiosInstance from './axios';

const getAll = async () => {
  const response = await axiosInstance.get<{ books: BookType[] }>('/book/get-all');
  return response.data;
};

const getById = async (bookId: string | undefined) => {
  const response = await axiosInstance.get<{ book: BookType }>(`/book/${bookId}/book`);
  return response.data;
};

const filtered = async (param: string) => {
  const response = await axiosInstance.get<{ books: BookType[] }>('/book/filtered-books', { params: { param } });
  return response.data;
};

export default {
  getAll,
  getById,
  filtered,
};
