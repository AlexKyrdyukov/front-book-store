import { axiosInstance } from '../api';

const getAll = async () => {
  const response = await axiosInstance.get('/favorites');
  return response.data;
};

const addById = async (bookId: number) => {
  const response = await axiosInstance.post('/favorites/add', { bookId });
  return response.data;
};

const deleteById = async (bookId: number) => {
  const response = await axiosInstance.delete('/favorites/delete', { data: { bookId } });
  return response.data;
};

export default {
  getAll,
  addById,
  deleteById,
};
