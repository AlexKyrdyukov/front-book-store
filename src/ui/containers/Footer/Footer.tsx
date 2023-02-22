import React from 'react';
import { Link } from 'react-router-dom';

import { userSliceActions } from '../../../store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../../store';
import cookies from '../../../utils/coookieHelper';

import mapCart from './images/map.svg';
import logoSite from './images/logo.svg';

import StyledFooter from './Footer.style';
import { cartSliceActions } from '../../../store/slices/cartSlice';
import { favoriteSliceActions } from '../../../store/slices/favoriteSlice';

const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);

  const logOut = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const flag = event.currentTarget.tagName === 'A';
    if (!user) {
      return;
    }
    dispatch(userSliceActions.removeUser());
    dispatch(cartSliceActions.removeAllBooks());
    dispatch(favoriteSliceActions.removeAllBooks());
    cookies.access.remove();

    if (flag) {
      cookies.refresh.remove();
    }
  };

  return (
    <StyledFooter>
      <div className="footer__container">
        <div className="footer__contacts">
          <button
            className="button__log-out"
            onClick={logOut}
          >
            <img className="footer__logo"
              src={logoSite} alt="site logo"
            />
          </button>
          <span
            className="footer__url"
          >tranthuy.nute@gmail.com
          </span>
          <span
            className="footer__phone-nuber"
          >(480) 555-0103
          </span>
        </div>
        <nav className="links__list">
          <Link className="footer__link" to="/">Catalog</Link>
          <Link className="footer__link" to="/account">My Account</Link>
          <Link className="footer__link" to="/cart">Cart</Link>
          <Link className="footer__link" to="/">Home Page</Link>
          <Link onClick={logOut} className="footer__link" to="/">log-out</Link>
        </nav>
        <div
          className="footer__map-block"
        >
          <p
            className="footer__address"
          >
            6391 Elgin St. Celina, Delaware 10299
          </p>
          <div
            className="image__block"
          >
            <img
              className="footer__map-image" src={mapCart} alt="map address"
            />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
