import React from 'react';

import Diapason from './components/Diapason';

import triangle from '../../image/triangle.svg';
import StyledPriceDropDown from './PriceDropDown.style';

const PriceDropDown: React.FC = () => {
  return (
    <StyledPriceDropDown>
      <img className="drop-down__triangle" src={triangle} alt="cool triangle" />
      <Diapason />
    </StyledPriceDropDown>
  );
};

export default PriceDropDown;
