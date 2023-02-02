import { axiosInstance } from '../api';

type GenreType = {
  genreId: number;
  name: string;
};

const getAll = async () => {
  const response = await axiosInstance.get<{ genres: GenreType[] }>('/genres/get-all-genres');
  return response.data;
};

export default {
  getAll,
};
