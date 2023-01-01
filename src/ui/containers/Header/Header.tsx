import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CircleButton from '../../components/CircleButton';
import headerLogo from './images/logo.svg';
import { useAppSelector } from '../../../store';

import inputLogo from './images/search.svg';
import cart from './images/Cart.svg';
import heart from './images/heart.svg';
import profile from './images/profile.svg';
import StyledHeader from './Herader.style';

const Header: React.FC = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  return (
    <StyledHeader
      user={Boolean(user)}
    >
      <Link
        className="block__logo"
        to="/"
      >
        <img
          className="logo"
          src={headerLogo}
          alt="logo site"
        />
      </Link>
      <Link
        className="header__link-catalog"
        to="/"
      >
        Catalog
      </Link>
      <form
        className="header__form-block"
        action="submit"
      >
        <Input
          placeholder="search"
          type="text"
          alt="logo search"
          src={inputLogo}
          className="header__input"
          isHeader
        />
      </form>
      {!user ? (
        <div className="block__button">
          <Link to="/signIn">
            <Button
              className="sign-in__button"
            >log in
            </Button>
          </Link>
          <Link to="/signUp">
            <Button
              className="sign-in__button"
            >Sign Up
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <Link to="/cart">
            <div className="button__cart">
              {user
                ? <div><span>{!!user}</span></div>
                : null
              }
              <CircleButton
                type="button"
                src={cart}
              />
            </div>
          </Link>
          <Link to="/favorites">
            <div className="button__likes-books">
              <CircleButton
                type="button"
                src={heart}
              />
            </div>
          </Link>
          <Link to="/account">
            <div className="button__account">
              <CircleButton
                type="button"
                src={profile}
              />
            </div>
          </Link>
        </>
      )}
    </StyledHeader >
  );
};

export default Header;
