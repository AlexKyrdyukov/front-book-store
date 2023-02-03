import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SortByItem from './components/SortByItem/SortByItem';

import triangle from '../../image/triangle.svg';

import StyledSortDropDown from './SortByDropDown.style';

const SortDropDown: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortVariant = [
    'Price',
    'Name',
    'Author name',
    'Rating',
    'Date of issue',
  ];

  const handleSortBy = (text: string) => {
    if ((text !== 'Price') && (text !== searchParams.get('sortBy'))) {
      searchParams.set('sortBy', text);
      setSearchParams(searchParams);
      return;
    }
    if (text === 'Price' || (text === searchParams.get('sortBy'))) {
      searchParams.set('sortBy', 'Price');
      setSearchParams(searchParams);
    }
  };

  return (
    <StyledSortDropDown>
      <img className="drop-down__triangle" src={triangle} alt="cool triangle" />
      {sortVariant.map((item) => (
        <SortByItem
          key={item}
          text={item}
          state={searchParams.get('sortBy') === item}
          handleSortBy={handleSortBy}
        />))}
    </StyledSortDropDown>
  );
};

export default SortDropDown;
