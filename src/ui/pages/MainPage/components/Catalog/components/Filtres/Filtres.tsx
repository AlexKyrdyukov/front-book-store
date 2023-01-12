import React from 'react';

import GanrDropDown from './components/GanrDropDown';
import SortDropDown from './components/SortDropDown';
import PriceDropDown from './components/PriceDropDown';

import StyledFiltres from '../Filtres.style';

const Filtres: React.FC = () => {
  return (
    <StyledFiltres>

      <GanrDropDown />

      <SortDropDown />

      <PriceDropDown />
    </StyledFiltres>
  );
};

export default Filtres;
