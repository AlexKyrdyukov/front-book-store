import React from 'react';

import Input from '../../components/Input/Input';
import Button from '../../components/Button';
import headerLogo from './images/logo.svg';
import { StyledHeader } from './Herader.style';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img className="header__image" src={headerLogo} alt="logo site" />
      <a className="header__link" href="#">Catalog</a>
      <Input />
      <Button>
        Log In/ Sign Up
      </Button>
    </StyledHeader>
  );
};

export default Header;
