import type { BookType } from '../store/slices/bookSlice';
import axiosInstance from './axios';

const getAll = async () => {
  const response = await axiosInstance.get<{books: BookType[]}>('/books');
  return response.data;
};

const getById = async (bookId: string | undefined) => {
  const response = await axiosInstance.get<{book: BookType}>(`/books/${bookId}`);
  return response.data;
};

export default {
  getAll,
  getById,
};
