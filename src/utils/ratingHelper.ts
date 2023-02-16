import { ratingApi } from '../api';

const changeRating =
  async (bookId: number, newRating: number, userId: number) => {
    try {
      const response = await ratingApi.changeRating(bookId, newRating, userId);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export default changeRating;
