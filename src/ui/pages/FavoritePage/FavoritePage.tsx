import React from 'react';

import BookPage from '../components/BookPage/BookPage';

import { useAppSelector, useAppDispatch } from '../../../store';
import { cartHelper, favoriteHelper } from '../../../utils';

import StyledFavoritPage from './FavoritePage.style';
import { favoritesApi } from '../../../api';
import { favoriteSliceActions } from '../../../store/slices/favoriteSlice';

const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const favoriteBooks = useAppSelector(({ rootSlice }) => rootSlice.favoriteSlice.favoriteBooks);
  const cartBooks = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.cartBooks);

  React.useEffect(() => {
    (async () => {
      try {
        const { favoriteBooks } = await favoritesApi.getAll();
        dispatch(favoriteSliceActions.setAllBooks(favoriteBooks));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <StyledFavoritPage>
      {favoriteBooks.map((item) => (
        <BookPage
          key={item.bookId}
          book={item}
          isUser={!!user}
          isFavorite={
            favoriteHelper.handleIsFavorite(item.bookId, favoriteBooks) as boolean
          }
          isInCart={
            cartHelper.checkIsInCart(item.bookId, cartBooks) as boolean
          }
        />))}
    </StyledFavoritPage>
  );
};

export default Favorites;
