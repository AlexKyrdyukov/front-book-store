import React from 'react';

import BookPage from '../components/BookPage/BookPage';

import { useAppSelector } from '../../../store';
import { cartHelper, favoriteHelper } from '../../../utils';

import StyledFavoritPage from './FavoritePage.style';

const Favorites: React.FC = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  return (
    <StyledFavoritPage>
      {user?.favoriteBooks?.map((item) => (
        <BookPage
          key={item.bookId}
          book={item}
          isUser={!!user}
          isFavorite={
            favoriteHelper.handleIsFavorite(item.bookId, user.favoriteBooks) as boolean
          }
          isInCart={
            cartHelper.checkIsInCart(item.bookId, user.cartProducts) as boolean
          }
        />))}
    </StyledFavoritPage>
  );
};

export default Favorites;
