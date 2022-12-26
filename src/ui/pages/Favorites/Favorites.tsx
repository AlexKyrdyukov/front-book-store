import React from 'react';
import { StyledCatalogPages } from './Favorites.style';

type PropsType = {
  value?: string;
};

const Catalog: React.FC<PropsType> = () => {
  return (
    <StyledCatalogPages>
      Catalog
    </StyledCatalogPages>
  );
};

export default Catalog;
