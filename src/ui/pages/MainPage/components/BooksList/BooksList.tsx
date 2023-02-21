import React from 'react';

import BookPage from '../../../components/BookPage/BookPage';

import { favoriteHelper, cartHelper } from '../../../../../utils';
import { useAppSelector } from '../../../../../store';

import StyledBooksLists from './BooksList.style';
import { cartApi, favoritesApi } from '../../../../../api';

const BooksList: React.FC = () => {
  React.useEffect(() => {
    (async () => {
      const responseFavorite = await favoritesApi.getAll();
      const responseCart = await cartApi.getAll();
      // eslint-disable-next-line no-console
      console.log(responseFavorite);
      // eslint-disable-next-line no-console
      console.log(responseCart);
    })();
  }, []);

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
