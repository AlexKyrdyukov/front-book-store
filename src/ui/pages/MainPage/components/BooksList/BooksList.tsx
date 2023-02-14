import React from 'react';
import { AxiosError } from 'axios';

import BookPage from '../../../components/BookPage/BookPage';

import { useAppSelector } from '../../../../../store';
import changeRating from '../../../../../utils/ratingHelper';
import StyledBooksLists from './BooksList.style';
import errorHandler from '../../../../../utils/errorHandler';
import { cartApi } from '../../../../../api';

const BooksList: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.userId);

  const addToCart = async (bookId: number) => {
    try {
      if (userId) {
        await cartApi.addToCart(bookId, userId);
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
