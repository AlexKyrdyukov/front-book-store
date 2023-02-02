import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SortByItem from './components/SortByItem/SortByItem';

import triangle from '../../image/triangle.svg';

import StyledSortDropDown from './SortByDropDown.style';

const SortDropDown: React.FC = () => {
  // const [state, setState] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortVariant = [
    'Price',
    'Name',
    'Author name',
    'Rating',
    'Date of issue',
  ];

  React.useEffect(() => {
    if (searchParams.get('sortBy')) {
      searchParams.get('sortBy');
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSortBy = (text: string) => {
    // eslint-disable-next-line no-console
    console.log('event', text);
    if (searchParams.get('sortBy') === text) {
      searchParams.delete('sortBy');
    } else {
      searchParams.set('sortBy', text);
    }
    setSearchParams(searchParams);
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
