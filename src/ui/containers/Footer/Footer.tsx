import React from 'react';
import { StyledFooter } from './Footer.style';
import logoSite from './images/logo.svg';
import mapCart from './images/map.svg';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="footer__container">
        <div className="left__column">
          <img className="footer__logo" src={logoSite} alt="site logo" />
          <span className="footer__url">tranthuy.nute@gmail.com</span>
          <span className="footer__phone-nuber">(480) 555-0103</span>
        </div>
        <ul className="links__list">
          <li><a className="footer__link" href="#">Home Page</a></li>
          <li><a className="footer__link" href="#">Catalog</a></li>
          <li><a className="footer__link" href="#">My Account</a></li>
          <li><a className="footer__link" href="#">Cart</a></li>
        </ul>
        <div className="footer__map-block">
          <span className="footer__adress">6391 Elgin St. Celina, Delaware</span>
          <span className="footer__index">10299</span>
          <img className="footer__map-image" src={mapCart} alt="map adress" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
