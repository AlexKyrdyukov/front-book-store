import { axiosInstance } from '../api';
import type { CommentsType } from '../store/slices/bookSlice';

const create = async (userId: number, bookId: string, comment: string) => {
  const response = await axiosInstance.post<{ comments: CommentsType[] }>(`comment/${userId}`, { bookId, comment });
  return response.data;
};

export default {
  create,
};
