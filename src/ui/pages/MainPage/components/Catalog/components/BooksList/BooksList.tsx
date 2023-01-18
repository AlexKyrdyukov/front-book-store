import React from 'react';

import BookPage from '../../../../../components/BookPage';

import { useAppSelector } from '../../../../../../../store';

import StyledBooksLists from './BooksList.style';

const BooksList: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);

  return (
    <StyledBooksLists>
      {books.map((item) => <BookPage key={item.bookId} book={item} />)}
    </StyledBooksLists>

  );
};

export default BooksList;
