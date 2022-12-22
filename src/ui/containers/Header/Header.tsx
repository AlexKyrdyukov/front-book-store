import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input/Input';
import Button from '../../components/Button';
import headerLogo from './images/logo.svg';
import { StyledHeader } from './Herader.style';
import inputLogo from './images/search.svg';

type PropType = {
  value?: string;
};

const Header: React.FC<PropType> = () => {
  return (
    <StyledHeader>
        <Link to="/home">
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
          class="header__input"
          isHeader
        />
        <Link to="/signUp">
          <Button
            text="Log In/ Sign Up"
          />
        </Link>
    </StyledHeader >
  );
};

export default Header;
