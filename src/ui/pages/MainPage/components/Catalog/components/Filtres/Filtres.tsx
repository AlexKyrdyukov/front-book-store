import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import GanrDropDown from './components/GanrDropDown';
import SortByDropDown from './components/SortByDropDown';
import PriceDropDown from './components/PriceDropDown';
import DropDownButton from './components/DropDownButton';

import StyledFiltres from './Filtres.style';

const Filtres: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchGenres, setSearchGenres] = useState<string[]>([]);
  const a = ['a', 'b', 'c'];
  // eslint-disable-next-line no-console
  console.log(a.join(', '));
  // React.useEffect(() => {
  //   const genre = searchParams.get('genre') as string;
  //   // eslint-disable-next-line no-console
  //   console.log(genre);
  //   setSearchGenres([
  //     ...searchGenres,
  //     genre,
  //   ]);
  //   searchParams.delete('genre');
  //   // searchGenres.push(genre);
  //   searchParams.set('genres', searchGenres.join(','));
  //   setSearchParams(searchParams);
  //   // eslint-disable-next-line no-console
  //   console.log(searchGenres, searchGenres.join(','));
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchParams]);
  // eslint-disable-next-line no-console
  console.log(searchParams.get('genres'));
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
