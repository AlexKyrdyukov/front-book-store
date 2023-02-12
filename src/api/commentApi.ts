import { axiosInstance } from '../api';
import { BookType } from '../store/slices/bookSlice';

const create = async (userId: number, bookId: number, comment: string) => {
  const response = await axiosInstance.post<{ book: BookType }>(`comment/${userId}`, { bookId, comment });
  return response.data;
};

export default {
  create,
};
