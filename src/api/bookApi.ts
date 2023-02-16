import type { BookType } from '../store/slices/bookSlice';
import { axiosInstance } from '../api';

const getById = async (bookId: string | undefined) => {
  const response = await axiosInstance.get<{ book: BookType }>(`/book/${bookId}`);
  return response.data;
};

const filtered = async (params: object) => {
  const response = await axiosInstance.get<{ books: BookType[]; numberOfBooks: number }>('/book', { params });
  return response.data;
};

export default {
  getById,
  filtered,
};
