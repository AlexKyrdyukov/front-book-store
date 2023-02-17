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
    // eslint-disable-next-line no-console
    console.log('event');
    setSelectedGenresId((prevState) => {
      const index = prevState?.findIndex((item) => item === genreId);
      if (index !== -1) {
        prevState.splice(index, 1);
        return [...prevState];
      }
      return [...prevState, genreId];
    });
    // eslint-disable-next-line no-console
    console.log(selectedGenresId.join(','));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  React.useEffect(() => {
    if (selectedGenresId.length) {
      // eslint-disable-next-line no-console
      console.log(selectedGenresId.join(','));
      searchParams.set('genres', selectedGenresId.join(','));
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenresId]);

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
