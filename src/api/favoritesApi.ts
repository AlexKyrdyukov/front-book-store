import { axiosInstance } from '../api';

const getFavorites = async (bookId: number) => {
  const response = await axiosInstance.get('/favorites', { params: { bookId } });
  return response.data;
};

const addFavorite = async (bookId: number) => {
  const response = await axiosInstance.post('/favorites/add', { bookId });
  return response.data;
};

const removeFavorite = async (bookId: number) => {
  const response = await axiosInstance.delete('/favorites/remove', { data: { bookId } });
  return response.data;
};

export default {
  addFavorite,
  getFavorites,
  removeFavorite,
};
