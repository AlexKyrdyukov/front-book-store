import React from 'react';
import { AxiosError } from 'axios';

import Checkbox from './components/Checkbox';

import triangle from './image/triangle.svg';
import StyledGanrDropDown from './GanrDropDown.style';
import { genresApi } from '../../../../../../../../../api';
import errorHandler from '../../../../../../../../../utils/errorHandler';

type GenreType = {
  genreId: number;
  name: string;
};

const DropDown: React.FC = () => {
  const [genres, setGenres] = React.useState<GenreType[]>([]);

  const [selectedGenresId, setSelectedGenresId] = React.useState([]);

  // const onClickHandler = (id) => {
  //   setSelectedGenresId(prev => [...prev, id]);
  // }

  React.useEffect(() => {
    (async () => {
      try {
        const { genres } = await genresApi.getAll();

        setGenres(genres);
      } catch (error) {
        if (error instanceof AxiosError) {
          errorHandler(error);
        }
      }
    })();
  }, []);
  return (
    <StyledGanrDropDown>
      <img className="drop-down__triangle" src={triangle} alt="cool triangle" />
      {genres.map((item) => (<Checkbox key={item.name} value={item.name} />))}
    </StyledGanrDropDown>
  );
};

export default DropDown;
