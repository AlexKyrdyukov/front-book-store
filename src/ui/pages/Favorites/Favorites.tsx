import React from 'react';
import { AxiosError } from 'axios';

import BookPage from '../components/BookPage';
import { changeRating } from '../ProductCard/ProductCard';
import { useAppSelector } from '../../../store';
import StyledFavoritPage from './Favorites.style';
import { cartApi } from '../../../api';
import errorHandler from '../../../utils/errorHandler';
import type { BookType } from '../../../store/slices/bookSlice';

type PropsType = {
  value?: string;
};

const Favorites: React.FC<PropsType> = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const [favoritBooks, setFavoritesBooks] = React.useState<BookType[]>([]);
  // eslint-disable-next-line no-console
  console.log(user?.likeBooks);
  const addToCart = async (bookId: number) => {
    try {
      if (user?.userId) {
        const response = await cartApi.addToCart(bookId, user.userId);
        // eslint-disable-next-line no-console
        console.log(response);
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
