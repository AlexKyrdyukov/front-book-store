import React from 'react';
import StyledCatalogPages from './Favorites.style';

type PropsType = {
  value?: string;
};

const Catalog: React.FC<PropsType> = () => {
  return (
    <StyledCatalogPages>
      Favorites
    </StyledCatalogPages>
  );
};

export default Catalog;
