import { axiosInstance } from '../api';

type GenreType = {
  genreId: number;
  name: string;
};

const getAll = async () => {
<<<<<<< HEAD
  const response = await axiosInstance.get<{ genres: GenreType[] }>('/genres/get-all-genres');
=======
  const response = await axiosInstance.get<{genres: GenreType[]}>('/genres/get-all');
>>>>>>> 32a6fa5fdc76cd4ad00966ccb29479ac0895ab34
  return response.data;
};

export default {
  getAll,
};
