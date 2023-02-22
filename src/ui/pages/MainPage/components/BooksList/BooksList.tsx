import React from 'react';

import BookPage from '../../../components/BookPage';
import { useAppSelector } from '../../../../../store';
import { favoriteHelper, cartHelper } from '../../../../../utils';

import StyledBooksLists from './BooksList.style';

const BooksList: React.FC = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  const cartBooks = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.cartBooks);
  const favoriteBooks = useAppSelector(({ rootSlice }) => rootSlice.favoriteSlice.favoriteBooks);

  const isInCart = React.useCallback((bookId: number) => {
    return cartHelper.checkIsInCart(bookId, cartBooks);
  }, [cartBooks]);

  const isFavorite = React.useCallback((bookId: number) => {
    return favoriteHelper.handleIsFavorite(bookId, favoriteBooks);
  }, [favoriteBooks]);

  return (
    <StyledBooksLists>
      {books.map((item) => (
        <BookPage
          key={item.bookId}
          book={item}
          isUser={!!user}
          isFavorite={isFavorite(item.bookId)}
          isInCart={isInCart(item.bookId)}
        />))}
    </StyledBooksLists>

  );
};

export default BooksList;
