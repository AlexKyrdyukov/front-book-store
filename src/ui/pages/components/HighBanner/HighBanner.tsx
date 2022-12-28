import React from 'react';

import Button from '../../../components/Button';

import humanDesktop from './images/human.png';
import humanTablet from './images/humanTablet.svg';
import humanMobile from './images/humanMobile.svg';
import booksDesktop from './images/bgWithBook.png';
import booksTablet from './images/bookTablet.svg';
import booksMobile from './images/bookMobile.svg';
import { StyledTopBanner } from './HighBanner.style';

const Home: React.FC = () => {
  return (
    <StyledTopBanner>
      <div className="banner__wrapper">
        <div className="block__text-button">
          <h1 className="banner__title">
            Build your library with us
          </h1>
          <h3 className="banner__subtitle">
            <p>
              Buy two books and
              get one for free
            </p>
          </h3>
          <div className="button__wrapper">
            <a
              target="blank"
              href="https://babenki.top/krasivye-siski/7540-krasivye-sisi-52-foto.html"
            >
              <Button
                type="button"
                className="button__block"
              >Choose a book
              </Button>
            </a>
          </div>
        </div>
        <div className="books__wrapper">
          <picture>
            <source className="books" media="(min-width: 1440px)" srcSet={booksDesktop} />
            <source className="books" media="(min-width: 834px)" srcSet={booksTablet} />
            <img className="books" src={booksMobile} alt="Flowers" />
          </picture>
        </div>
        <div
          className="human__wrapper"
        >
          <picture>
            <source className="human" media="(min-width: 1440px)" srcSet={humanDesktop} />
            <source className="human" media="(min-width: 834px)" srcSet={humanTablet} />
            <img className="human" src={humanMobile} alt="Flowers" />
          </picture>
        </div>
      </div>
    </StyledTopBanner>
  );
};

export default Home;
