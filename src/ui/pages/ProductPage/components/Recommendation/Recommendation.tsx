import React from 'react';
import { AxiosError } from 'axios';

import BookPage from '../../../components/BookPage/BookPage';

import { cartApi } from '../../../../../api';
import changeRating from '../../../../../utils/ratingHelper';
import errorHandler from '../../../../../utils/errorHandler';
import { useAppSelector, useAppDispatch } from '../../../../../store';
import { userSliceActions } from '../../../../../store/slices/userSlice';

import StyledRecommendation from './Recommendation.style';

const Recommendation: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.userId);

  const recommendationBooks = books.slice(-4);
  const addToCart = async (bookId: number) => {
    try {
      if (userId) {
        const response = await cartApi.addToCart(bookId, userId);
        dispatch(userSliceActions.setBooks(response.cartBooks));
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
      {recommendationBooks.map((item) => (
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
