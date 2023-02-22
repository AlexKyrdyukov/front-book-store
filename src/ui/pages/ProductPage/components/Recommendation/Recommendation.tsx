import React from 'react';

import BookPage from '../../../components/BookPage';
import { useAppSelector } from '../../../../../store';
import { cartHelper, favoriteHelper } from '../../../../../utils';

import StyledRecommendation from './Recommendation.style';

const Recommendation: React.FC = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  const cartBooks = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.cartBooks);
  const favoriteBooks = useAppSelector(({ rootSlice }) => rootSlice.favoriteSlice.favoriteBooks);

  const recommendationBooks = books.slice(-4);

  const isInCart = React.useCallback((bookId: number) => {
    return cartHelper.checkIsInCart(bookId, cartBooks);
  }, [cartBooks]);

  const isFavorite = React.useCallback((bookId: number) => {
    return favoriteHelper.handleIsFavorite(bookId, favoriteBooks);
  }, [favoriteBooks]);

  return (
    <StyledRecommendation>
      {recommendationBooks.map((item) => (
        <BookPage
          key={item.bookId}
          book={item}
          isUser={!!user}
          isFavorite={isFavorite(item.bookId)}
          isInCart={isInCart(item.bookId)}
        />))}
    </StyledRecommendation>
  );
};

export default Recommendation;
