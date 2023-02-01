import React from 'react';
import { AxiosError } from 'axios';

import Checkbox from './components/Checkbox';

import triangle from './image/triangle.svg';
import StyledGanrDropDown from './GanrDropDown.style';
import { genresApi } from '../../../../../../../../../api';
import errorHandler from '../../../../../../../../../utils/errorHandler';

const DropDown: React.FC = () => {
  const [genres, setGenres] = React.useState<string[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await genresApi.getAll();
        setGenres(response);
      } catch (error) {
        if (error instanceof AxiosError) {
          errorHandler(error);
        }
      }
    })();
  }, []);

  // const genres = [
  //   'Fiction',
  //   'Non—fiction',
  //   'Light fiction',
  //   'Science-fiction',
  //   'Fantasy',
  //   'Business & Finance',
  //   'Politics',
  //   'Travel books',
  //   'Autobiography',
  //   'History',
  //   'Thriller / Mystery',
  //   'Romance',
  //   'Satire',
  //   'Horror',
  //   'Health / Medicine',
  //   'Children\'s books',
  //   'Encyclopedia'];
  return (
    <StyledGanrDropDown>
      <img className="drop-down__triangle" src={triangle} alt="" />
      {genres.map((item) => (<Checkbox key={item} value={item} />))}
    </StyledGanrDropDown>
  );
};

export default DropDown;
