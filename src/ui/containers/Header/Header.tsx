import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input/Input';
import Button from '../../components/Button';
import headerLogo from './images/logo.svg';
import { StyledHeader } from './Herader.style';
import inputLogo from './images/search.svg';
import { useAppSelector } from '../../../store';

type PropType = {
  value?: string;
};

const Header: React.FC<PropType> = () => {
  const user = useAppSelector(({ user }) => user);
  return (
    <StyledHeader>
      <Link
        className="block__image"
        to="/home"
      >
        <img
          className="header__logo"
          src={headerLogo}
          alt="logo site"
        />
      </Link>
      <Link
        className="header__link-catalog"
        to="/catalog"
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
      {user ? (
        <>
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
        </>
      ) : (
        <Link to="/cart">
          <Button
            type="button"
            text="boobs"
          />
        </Link>)}
    </StyledHeader >
  );
};

export default Header;
