import React from 'react';
import { AxiosError } from 'axios';

import BookPage from '../components/BookPage';
import changeRating from '../../../utils/ratingHelper';
import { useAppSelector } from '../../../store';
import { cartApi } from '../../../api';
import errorHandler from '../../../utils/errorHandler';

import StyledFavoritPage from './Favorites.style';

const Favorites: React.FC = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const addToCart = async (bookId: number) => {
    try {
      if (user?.userId) {
        await cartApi.addToCart(bookId, user.userId);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        errorHandler(error);
      }
      console.error(error);
    }
  };
  return (
    <StyledFavoritPage>
      {user?.likeBooks.map((item) => (
        <BookPage
          handleAddBookInCart={addToCart}
          key={item.bookId}
          handleRating={changeRating}
          book={item}
        />))}
    </StyledFavoritPage>
  );
};

export default Favorites;
