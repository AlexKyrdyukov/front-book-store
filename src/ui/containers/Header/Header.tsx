import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input/Input';
import Button from '../../components/Button';
import CircleButton from '../../components/CircleButton';
import headerLogo from './images/logo.svg';
import { StyledHeader } from './Herader.style';
import { useAppSelector } from '../../../store';
import inputLogo from './images/search.svg';
import cart from './images/Cart.svg';
import heart from './images/heart.svg';
import profile from './images/profile.svg';

type PropType = {
  value?: string;
};

const Header: React.FC<PropType> = () => {
  const user = useAppSelector(({ user }) => user);
  return (
    <StyledHeader
      user={Boolean(user)}
    >
      <Link
        className="block__image"
        to="/"
      >
        <img
          className="header__logo"
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
      <Input
        placeholder="search"
        type="text"
        alt="logo search"
        src={inputLogo}
        className="header__input"
        isHeader
      />
      {!user ? (
        <>
          <Link to="/signIn">
            <Button
              text="Log In"
              left
              isHeader
            />
          </Link>
          <Link to="/signUp">
            <Button
              text="/ Sign Up"
              right
              isHeader
            />
          </Link>
        </>
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
