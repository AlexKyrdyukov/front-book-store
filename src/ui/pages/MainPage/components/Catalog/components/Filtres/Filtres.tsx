import React from 'react';

import GanrDropDown from './components/GanrDropDown';
import SortDropDown from './components/SortDropDown';
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
        component={<SortDropDown />}
      />
      <DropDownButton
      title="Sort by price"
      component={<PriceDropDown />}
      />
    </StyledFiltres>
  );
};

export default Filtres;
