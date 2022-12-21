import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter } from './Footer.style';
import logoSite from './images/logo.svg';
import mapCart from './images/map.svg';

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
        <ul className="links__list">
          <li><Link className="footer__link" to="/home">Home Page</Link></li>
          <li><Link className="footer__link" to="/catalog">Catalog</Link></li>
          <li><Link className="footer__link" to="/account">My Account</Link></li>
          <li><Link className="footer__link" to="/cart">Cart</Link></li>
        </ul>
        <div className="footer__map-block">
          <p className="footer__address">
            6391 Elgin St. Celina, Delaware 10299
          </p>
          <img className="footer__map-image" src={mapCart} alt="map address" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
