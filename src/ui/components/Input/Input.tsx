import React from 'react';
import { StyledInput } from './Input.style';
import searchImg from './image/Search.svg';

const Input: React.FC = () => {
  return (
    <StyledInput>
      <img
        className="block__image"
        src={searchImg}
        alt="search image"
      />
      <input className="block__input" type="text" placeholder="search" />
    </StyledInput>
  );
};

export default Input;
