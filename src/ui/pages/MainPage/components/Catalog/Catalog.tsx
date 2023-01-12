import React from 'react';

import Filtres from './components/Filtres';
import BookPage from '../../../../components/BookPage/BookPage';

import StyledCatalog from './Catalog.style';

const Catalog: React.FC = () => {
  return (
    <StyledCatalog>

      <h2>Catalog</h2>

      <Filtres />

      <BookPage />

    </StyledCatalog>
  );
};

export default Catalog;
