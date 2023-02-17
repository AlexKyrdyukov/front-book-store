import { axiosInstance } from '../api';

const changeRating = async (bookId: number, rating: number) => {
  const response = await axiosInstance.post<{ bookId: number; rating: number }>('/rating', { bookId, rating });
  return response.data;
};

export default {
  changeRating,
};
