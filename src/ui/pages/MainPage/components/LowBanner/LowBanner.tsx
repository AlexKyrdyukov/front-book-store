import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../../components/Button/Button';

import castle from './images/castleTable.png';
import fairyDesktop from './images/fairyDesktop.png';
import fairyTablet from './images/fairyTablet.png';
import fairyMobile from './images/fairyMobile.png';

import StyledLowBanner from './LowBanner.style';

const LowBanner = () => {
  return (
    <StyledLowBanner>
      <div className="low-banner__wrapper">
        <div className="image__castle-block">
          <img className="castle" src={castle} alt="fairytale castle" />
        </div>
        <div className="image__fairy-block">
          <picture>
            <source className="fairy" media="(min-width: 926px)" srcSet={fairyDesktop} />
            <source className="fairy" media="(min-width: 720px)" srcSet={fairyTablet} />
            <img className="fairy" src={fairyMobile} alt="fly fairy" />
          </picture>
        </div>
        <div className="button-text__block">
          <h2>Authorize now</h2>
          <p>Authorize now and discover the fabulous world of books</p>
          <div className="button__block">
            <Link to="/signIn">
              <Button
                className="low-banner__button"
              >Log In
              </Button>
            </Link>
            <Link to="/signUp">
              <Button
                className="low-banner__button"
              >Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </StyledLowBanner>
  );
};

export default LowBanner;
