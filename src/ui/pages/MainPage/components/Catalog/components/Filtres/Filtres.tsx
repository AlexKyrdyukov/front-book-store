import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import GanrDropDown from './components/GanrDropDown';
import SortByDropDown from './components/SortByDropDown';
import PriceDropDown from './components/PriceDropDown';
import DropDownButton from './components/DropDownButton';

import StyledFiltres from './Filtres.style';

const Filtres: React.FC = () => {
  return (
    <StyledFiltres>
      <DropDownButton
        title="Genre"
        component={<GanrDropDown />}
      />
      <DropDownButton
        title="Price"
        component={<PriceDropDown />}
      />
      <DropDownButton
        title="Sort by price"
        component={<SortByDropDown />}
      />
    </StyledFiltres>
  );
};

export default Filtres;
