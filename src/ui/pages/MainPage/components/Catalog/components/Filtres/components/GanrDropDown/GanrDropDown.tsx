import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Checkbox from './components/Checkbox';

import triangle from '../../image/triangle.svg';
import StyledGanrDropDown from './GanrDropDown.style';

type PropsType = {
  genres: GenreType[];
};

type GenreType = {
  genreId: number;
  name: string;
};

const DropDown: React.FC<PropsType> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGenresId,
    setSelectedGenresId,
  ] = React.useState<string[]>(searchParams.get('genres')?.split(',') || []);

  React.useEffect(() => {
    searchParams.set('genres', selectedGenresId.join(','));
    if (!selectedGenresId.length) {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
  }, [selectedGenresId, searchParams, setSearchParams]);

  const changeFilters = (genreId: string) => {
    setSelectedGenresId((prevState) => {
      const index = prevState?.findIndex((item) => item === genreId);
      // eslint-disable-next-line no-bitwise
      if (~index) {
        prevState.splice(index, 1);
        return [...prevState];
      }
      return [...prevState, genreId];
    });
  };

  return (
    <StyledGanrDropDown>
      <img className="drop-down__triangle" src={triangle} alt="cool triangle" />
      {props.genres.map((item) => (
        <Checkbox
          key={item.name}
          id={item.genreId}
          value={item.name}
          state={selectedGenresId?.includes(String(item.genreId))}
          onClickHandler={changeFilters}
        />))}
    </StyledGanrDropDown>
  );
};

export default DropDown;
