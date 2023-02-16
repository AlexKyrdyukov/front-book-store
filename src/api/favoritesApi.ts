import { axiosInstance } from '../api';

const getFavorites = async (bookId: number, userId?: number) => {
  const response = await axiosInstance.get('/favorites', { params: { bookId, userId } });
  return response.data;
};

const addFavorite = async (bookId: number, userId: number) => {
  const response = await axiosInstance.post('/favorites/add', { bookId, userId });
  return response.data;
};

const removeFavorite = async (bookId: number, userId: number) => {
  const response = await axiosInstance.delete('/favorites/remove', { data: { bookId, userId } });
  return response.data;
};

export default {
  addFavorite,
  getFavorites,
  removeFavorite,
};
