import React from 'react';

import BookPage from '../components/BookPage';

import { useAppSelector, useAppDispatch } from '../../../store';
import StyledFavoritPage from './Favorites.style';

type PropsType = {
  value?: string;
};

const Favorites: React.FC<PropsType> = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  // eslint-disable-next-line no-console
  console.log(user?.likeBooks);
  return (
    <StyledFavoritPage>
      {user?.likeBooks.map((item) => <BookPage key={item.bookId} book={item} />)}
    </StyledFavoritPage>
  );
};

export default Favorites;
