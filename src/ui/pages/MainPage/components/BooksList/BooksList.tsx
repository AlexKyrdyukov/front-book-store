import React from 'react';

import BookPage from '../../../components/BookPage/BookPage';

import { favoriteHelper, cartHelper } from '../../../../../utils';
import { useAppSelector } from '../../../../../store';

import StyledBooksLists from './BooksList.style';

const BooksList: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);

  return (
    <StyledBooksLists>
      {books.map((item) => (
        <BookPage
          key={item.bookId}
          book={item}
          isUser={!!user}
          isFavorite={favoriteHelper.handleIsFavorite(item.bookId, user?.favoriteBooks) as boolean}
          isInCart={cartHelper.checkIsInCart(item.bookId, user?.cartProducts) as boolean}
        />))}
    </StyledBooksLists>

  );
};

export default BooksList;
