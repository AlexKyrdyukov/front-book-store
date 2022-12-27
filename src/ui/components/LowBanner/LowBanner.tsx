import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLowBanner } from './LowBanner.style';

import Button from '../Button';
import castle from './images/castleTable.png';
import fairyDesktop from './images/fairyDesktop.png';
import fairyTablet from './images/fairyTablet.png';
import fairyMobile from './images/fairyMobile.png';

const LowBanner = () => {
  return (
    <StyledLowBanner>
      <div className="footer__wrapper">
        <div className="image__castle-block">
          <img className="castle" src={castle} alt="fairytale castle" />
        </div>
        <div className="image__fairy-block">
          <picture>
            <source className="fairy" media="(min-width: 1440px)" srcSet={fairyDesktop} />
            <source className="fairy" media="(min-width: 834px)" srcSet={fairyTablet} />
            <img className="fairy" src={fairyMobile} alt="fly fairy" />
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
                isMobile
              />
            </Link>
            <Link to="/signUp">
              <Button
                text="/ Sign Up"
                right
                isMobile
              />
            </Link>
          </div>
        </div>
      </div>
    </StyledLowBanner>
  );
};

export default LowBanner;
