import { ratingApi } from '../api';

const changeRating =
  async (bookId: number, newRating: number) => {
    try {
      const response = await ratingApi.changeRating(bookId, newRating);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export default changeRating;
