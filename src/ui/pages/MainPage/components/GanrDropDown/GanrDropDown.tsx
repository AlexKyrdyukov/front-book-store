import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Checkbox from '../Checkbox';

import triangle from '../Filtres/image/triangle.svg';
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

  const changeFilters = (genreId: string) => {
    setSelectedGenresId((prevState) => {
      const index = prevState?.findIndex((item) => item === genreId);
      if (index !== -1) {
        prevState.splice(index, 1);
        return [...prevState];
      }
      return [...prevState, genreId];
    });
  };

  React.useEffect(() => {
    searchParams.set('genres', selectedGenresId.join(','));
    setSearchParams(searchParams);
    if (!selectedGenresId.length) {
      searchParams.delete('genres');
      setSearchParams(searchParams);
    }
  }, [searchParams, selectedGenresId, setSearchParams]);

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
