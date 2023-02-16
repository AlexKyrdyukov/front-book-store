import React from 'react';
import { AxiosError } from 'axios';

import BookPage from '../../../components/BookPage/BookPage';

import { cartApi } from '../../../../../api';
import changeRating from '../../../../../utils/ratingHelper';
import errorHandler from '../../../../../utils/errorHandler';
import { useAppSelector, useAppDispatch } from '../../../../../store';
import { userSliceActions } from '../../../../../store/slices/userSlice';

import StyledBooksLists from './BooksList.style';

const BooksList: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.userId);

  const addToCart = async (bookId: number) => {
    try {
      if (userId) {
        // const response = await cartApi.addingProductQuantity(bookId, userId, 33); // develop
        // dispatch(userSliceActions.setBooks(response.cartBooks));
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        errorHandler(error);
      }
      console.error(error);
    }
  };
  return (
    <StyledBooksLists>
      {books.map((item) => (
        <BookPage
          key={item.bookId}
          handleRating={changeRating}
          book={item}
          handleAddBookInCart={addToCart}
        />))}
    </StyledBooksLists>

  );
};

export default BooksList;
