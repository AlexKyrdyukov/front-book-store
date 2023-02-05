import type { BookType } from '../store/slices/bookSlice';
import { axiosInstance } from '../api';

// const getAll = async () => {
//   const response = await axiosInstance.get<{ books: BookType[] }>('/book/get-all-books');
//   return response.data;
// };

const getById = async (bookId: string | undefined) => {
  const response = await axiosInstance.get<{ book: BookType }>(`/book/${bookId}/book`);
  return response.data;
};

const filtered = async (params: object) => {
  const response = await axiosInstance.get<{ books: BookType[]; numberOfBooks: number }>('/book/filtered-books', { params });
  return response.data;
};

export default {
  getById,
  filtered,
};
