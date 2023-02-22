import React from 'react';
import BookPage from '../../../components/BookPage/BookPage';
import { useAppSelector } from '../../../../../store';

import StyledRecommendation from './Recommendation.style';
import { cartHelper, favoriteHelper } from '../../../../../utils';

const Recommendation: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const favoriteBooks = useAppSelector(({ rootSlice }) => rootSlice.favoriteSlice.favoriteBooks);
  const cartBooks = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.cartBooks);

  const recommendationBooks = books.slice(-4);

  return (
    <StyledRecommendation>
      {recommendationBooks.map((item) => (
        <BookPage
          key={item.bookId}
          book={item}
          isUser={!!user}
          isFavorite={favoriteHelper.handleIsFavorite(item.bookId, favoriteBooks) as boolean}
          isInCart={cartHelper.checkIsInCart(item.bookId, cartBooks) as boolean}
        />))}
    </StyledRecommendation>
  );
};

export default Recommendation;
