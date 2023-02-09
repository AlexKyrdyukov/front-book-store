import React from 'react';

import BookPage from '../../../../../components/BookPage';

import { useAppSelector } from '../../../../../../../store';
import { changeRaiting } from '../../../../../ProductCard/ProductCard';
import StyledBooksLists from './BooksList.style';

const BooksList: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);

  return (
    <StyledBooksLists>
      {books.map((item) => (
        <BookPage
          key={item.bookId}
          handleRaiting={changeRaiting}
          book={item}
        />))}
    </StyledBooksLists>

  );
};

export default BooksList;
