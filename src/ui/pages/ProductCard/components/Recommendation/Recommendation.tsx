import React from 'react';
import { AxiosError } from 'axios';

import BookPage from '../../../components/BookPage';

import { useAppSelector } from '../../../../../store';
import changeRating from '../../../../../utils/ratingHelper';
import StyledRecommendation from './Recommendation.style';
import { cartApi } from '../../../../../api';
import errorHandler from '../../../../../utils/errorHandler';

const Recommendation: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.userId);

  const recommendation = books.slice(-4);

  const addToCart = async (bookId: number) => {
    try {
      if (userId) {
        const response = await cartApi.addToCart(bookId, userId);
        // eslint-disable-next-line no-console
        console.log(response);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        errorHandler(error);
      }
      console.error(error);
    }
  };
  return (
    <StyledRecommendation>
      {recommendation.map((item) => (
        <BookPage
          key={item.bookId}
          book={item}
          handleAddBookInCart={addToCart}
          handleRating={changeRating}
        />))}
    </StyledRecommendation>
  );
};

export default Recommendation;
