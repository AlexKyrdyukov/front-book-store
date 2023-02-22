import React from 'react';

import BookPage from '../../../components/BookPage/BookPage';

import { favoriteHelper, cartHelper } from '../../../../../utils';
import { useAppSelector } from '../../../../../store';

import StyledBooksLists from './BooksList.style';
import { cartApi, favoritesApi } from '../../../../../api';

const BooksList: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const favoriteBooks = useAppSelector(({ rootSlice }) => rootSlice.favoriteSlice.favoriteBooks);
  const cartBooks = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.cartBooks);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('bookslist');
    (async () => {
      // const responseFavorite = await favoritesApi.getAll();
      // const responseCart = await cartApi.getAll();
      // // eslint-disable-next-line no-console
      // console.log(responseFavorite);
      // // eslint-disable-next-line no-console
      // console.log(responseCart);
    })();
  }, []);

  return (
    <StyledBooksLists>
      {books.map((item) => (
        <BookPage
          key={item.bookId}
          book={item}
          isUser={!!user}
          isFavorite={favoriteHelper.handleIsFavorite(item.bookId, favoriteBooks) as boolean}
          isInCart={cartHelper.checkIsInCart(item.bookId, cartBooks) as boolean}
        />))}
    </StyledBooksLists>

  );
};

export default BooksList;
