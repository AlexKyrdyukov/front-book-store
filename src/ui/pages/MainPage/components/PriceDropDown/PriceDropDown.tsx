import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Diapason from '../Diapason/Diapason';

import triangle from '../Filtres/image/triangle.svg';
import StyledPriceDropDown from './PriceDropDown.style';

const PriceDropDown: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleClick = (min: number, max: number) => {
    if (min === 0 && max === 2000) {
      searchParams.delete('minPrice');
      searchParams.delete('maxPrice');
      return setSearchParams(searchParams);
    }
    searchParams.set('minPrice', String(min));
    searchParams.set('maxPrice', String(max));
    setSearchParams(searchParams);
  };

  return (
    <StyledPriceDropDown>
      <img className="drop-down__triangle" src={triangle} alt="cool triangle" />
      <Diapason
        handlePrice={onHandleClick}
        min={searchParams.get('minPrice')
          ? +(searchParams.get('minPrice') as string) / 20
          : 0
        }
        max={searchParams.get('maxPrice')
          ? +(searchParams.get('maxPrice') as string) / 20
          : 100
        }
      />
    </StyledPriceDropDown>
  );
};

export default PriceDropDown;
