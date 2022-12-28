import React from 'react';
import { Link } from 'react-router-dom';

import logoSite from './images/logo.svg';
import mapCart from './images/map.svg';
import StyledFooter from './Footer.style';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="footer__container">
        <div className="footer__contacts">
          <Link to="/home">
            <img className="footer__logo" src={logoSite} alt="site logo" />
          </Link>
          <span className="footer__url">tranthuy.nute@gmail.com</span>
          <span className="footer__phone-nuber">(480) 555-0103</span>
        </div>
        <nav className="links__list">
          <Link className="footer__link" to="/">Catalog</Link>
          <Link className="footer__link" to="/account">My Account</Link>
          <Link className="footer__link" to="/cart">Cart</Link>
          <Link className="footer__link" to="/">Home Page</Link>
        </nav>
        <div className="footer__map-block">
          <p className="footer__address">
            6391 Elgin St. Celina, Delaware 10299
          </p>
          <div className="image__block">
            <img className="footer__map-image" src={mapCart} alt="map address" />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
