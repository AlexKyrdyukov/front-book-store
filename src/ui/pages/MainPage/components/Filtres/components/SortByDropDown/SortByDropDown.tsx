import React from 'react';
import { useSearchParams } from 'react-router-dom';

import SortByItem from './components/SortByItem/SortByItem';
import SortDirection from './components/SortDirection';
import triangle from '../../image/triangle.svg';

import StyledSortDropDown from './SortByDropDown.style';

const SortDropDown: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortVariant = [
    { title: 'Price', value: 'priceInCent' },
    { title: 'Name', value: 'name' },
    { title: 'Author name', value: 'author' },
    { title: 'Rating', value: 'averageRating' },
    { title: 'Date of issue', value: 'dateOfIssue' },
  ];

  const handleSortBy = (text: string) => {
    if ((text !== 'price') && (text !== searchParams.get('sortBy'))) {
      searchParams.set('sortBy', text);
      setSearchParams(searchParams);
      return;
    }
    if (text === 'price' || (text === searchParams.get('sortBy'))) {
      searchParams.set('sortBy', 'priceInCent');
      setSearchParams(searchParams);
    }
  };

  return (
    <StyledSortDropDown>
      <img className="drop-down__triangle" src={triangle} alt="cool triangle" />
      {sortVariant.map((item) => (
        <SortByItem
          key={item.title}
          text={item.title}
          value={item.value}
          state={
            searchParams.get('sortBy')
              ? searchParams.get('sortBy') === item.value
              : item.title === 'Price'}
          handleSortBy={handleSortBy
          }
        />))}
      <SortDirection
        text="Sort Direction"
      />
    </StyledSortDropDown>
  );
};

export default SortDropDown;
