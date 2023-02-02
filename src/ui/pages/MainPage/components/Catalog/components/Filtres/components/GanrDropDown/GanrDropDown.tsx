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
  const [selectedGenresId, setSelectedGenresId] = React.useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    if (searchParams.get('genres')) {
      setSelectedGenresId(searchParams.get('genres')?.split(',') as string[]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (selectedGenresId.length) {
      searchParams.set('genres', selectedGenresId.join(','));
    } else {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
  }, [selectedGenresId, searchParams, setSearchParams]);

  const changeFilters = (genreId: string) => {
    setSelectedGenresId((prevFilter) => {
      if (prevFilter.includes(genreId)) {
        return prevFilter.filter((searchFilter) => searchFilter !== genreId);
      }
      return [...prevFilter, genreId];
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
          state={selectedGenresId.includes(String(item.genreId))}
          onClickHandler={changeFilters}
        />))}
    </StyledGanrDropDown>
  );
};

export default DropDown;
