import React from 'react';
import { Navigate } from 'react-router-dom';

import { StyledHomePage } from './Home.style';
import Button from '../../components/Button/Button';
import imageHuman from './images/human.png';
import book from './images/bgWithBook.png';
import { useAppSelector } from '../../../store';

type PropsType = {
  value?: string;
};

const Home: React.FC<PropsType> = () => {
  // const user = useAppSelector(({ user }) => user);

  return (
    <StyledHomePage>
      <div className="banner__wrapper">
        <div className="block__text-button">
          <h2 className="banner__title">
            Build your library with us
          </h2>
          <h3 className="banner__subtitle">
            <p>
              Buy two books and
            </p>
            <p>
              get one for free
            </p>
          </h3>
          <Button
            text="Choose a book"
            type="button"
          />
        </div>
        <div className="book__wrapper">
          <img
            className="book"
            src={book}
            alt="open book"
          />
        </div>
        <div
          className="human__wrapper"
        >
          <img
            className="human"
            src={imageHuman}
            alt="human read book"
          />
        </div>
      </div>
    </StyledHomePage>
  );
};

export default Home;
