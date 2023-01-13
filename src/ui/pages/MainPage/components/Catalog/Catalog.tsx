import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Filtres from './components/Filtres';
import BookPage from '../../../components/BookPage';

import { useAppSelector } from '../../../../../store';

import StyledCatalog from './Catalog.style';

const Catalog: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  return (
    <StyledCatalog>

      <h2>Catalog</h2>

      <Filtres />

      {books.map((item) => <BookPage key={uuidv4()} book={item} />)}

    </StyledCatalog>
  );
};

export default Catalog;
