import React from 'react';
import { StyledTopBanner } from './HighBanner.style';
import Button from '../Button/Button';
import humanDesktop from './images/human.png';
import humanTablet from './images/humanTablet.svg';
import humanMobile from './images/humanMobile.svg';
import booksDesktop from './images/bgWithBook.png';
import booksTablet from './images/bookTablet.svg';
import booksMobile from './images/bookMobile.svg';

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
                text="Choose a book"
                type="button"
                isMobile
              />
            </a>
          </div>
        </div>
        <div className="books__wrapper">
          <picture>
            <source className="books" media="(max-width: 1440px)" srcSet={booksTablet} />
            <source className="books" media="(max-width: 834px)" srcSet={booksMobile} />
            <img className="books" src={booksDesktop} alt="Flowers" />
          </picture>
        </div>
        <div
          className="human__wrapper"
        >
          <picture>
            <source className="human" media="(max-width: 1440px)" srcSet={humanTablet} />
            <source className="human" media="(max-width: 834px)" srcSet={humanMobile} />
            <img className="human" src={humanDesktop} alt="Flowers" />
          </picture>
        </div>
      </div>
    </StyledTopBanner>
  );
};

export default Home;
