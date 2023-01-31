import React from 'react';

import Checkbox from './components/Checkbox';

import triangle from './image/triangle.svg';
import StyledGanrDropDown from './GanrDropDown.style';

const DropDown: React.FC = () => {
  const genres = [
    'Fiction',
    'Non—fiction',
    'Light fiction',
    'Science-fiction',
    'Fantasy',
    'Business & Finance',
    'Politics',
    'Travel books',
    'Autobiography',
    'History',
    'Thriller / Mystery',
    'Romance',
    'Satire',
    'Horror',
    'Health / Medicine',
    'Children\'s books',
    'Encyclopedia'];
  return (
    <StyledGanrDropDown>
      <img className="drop-down__triangle" src={triangle} alt="" />
      {genres.map((item) => (<Checkbox key={item} value={item} />))}
    </StyledGanrDropDown>
  );
};

export default DropDown;
