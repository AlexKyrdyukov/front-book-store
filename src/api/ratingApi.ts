import { axiosInstance } from '../api';

const changeRating = async (bookId: number, newRating: number, userId: number | undefined) => {
  const response = await axiosInstance.post<{ bookId: number; rating: number }>('/rating', { bookId, userId, newRating });
  return response.data;
};

export default {
  changeRating,
};
