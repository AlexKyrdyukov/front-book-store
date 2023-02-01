import { axiosInstance } from '../api';

const getAll = async () => {
  const response = await axiosInstance.get<string[]>('/genres/get-all');
  return response.data;
};

export default {
  getAll,
};
