import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLowBanner } from './LowBanner.style';

import Button from '../Button';
import castleDesktop from './images/castleDesktop.png';
import castleTablet from './images/castleTable.png';
import castleMobile from './images/castleMobile.png';
import fairyDesktop from './images/fairyDesktop.png';
import fairyTablet from './images/fairyTablet.png';
import fairyMobile from './images/fairyMobile.png';

const LowBanner = () => {
  return (
    <StyledLowBanner>
      <div className="footer__wrapper">
        <div className="image__castle-block">
          <picture>
            <source className="books" media="(max-width: 1440px)" srcSet={castleTablet} />
            <source className="books" media="(max-width: 834px)" srcSet={castleMobile} />
            <img className="books" src={castleDesktop} alt="Flowers" />
          </picture>
        </div>
        <div className="image__fairy-block">
          <picture>
            <source className="books" media="(max-width: 1440px)" srcSet={fairyTablet} />
            <source className="books" media="(max-width: 834px)" srcSet={fairyMobile} />
            <img className="books" src={fairyDesktop} alt="Flowers" />
          </picture>
        </div>
        <div className="button-text__block">
          <h2>Authorize now</h2>
          <p>Authorize now and discover the fabulous world of books</p>
          <div>
            <Link to="/signIn">
              <Button
                text="Log In"
                left
              />
            </Link>
            <Link to="/signUp">
              <Button
                text="/ Sign Up"
                right
              />
            </Link>
          </div>
        </div>
      </div>
    </StyledLowBanner>
  );
};

export default LowBanner;
