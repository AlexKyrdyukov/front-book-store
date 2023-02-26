import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import type { ChangeEvent } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CircleButton from '../../components/CircleButton';

import { useAppSelector } from '../../../store';

import headerLogo from './images/logo.svg';
import inputLogo from './images/search.svg';
import cart from './images/cart.svg';
import heart from './images/heart.svg';
import profile from './images/profile.svg';

import StyledHeader from './Herader.style';

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [delay, value]);
  return debounceValue;
};

const Header: React.FC = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const cartBooks = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.cartBooks);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchWord, setSearchWord] = React.useState(searchParams.get('search') || '');

  const debounce = useDebounce(searchWord, 500);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const word = event.target.value;
    setSearchWord(word);
  };

  React.useEffect(() => {
    if (!debounce) {
      searchParams.delete('search');
      setSearchParams(searchParams);
      return;
    }
    searchParams.set('search', searchWord);
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);
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
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          value={searchWord}
          name="search"
          placeholder="search"
          type="text"
          alt="logo search"
          src={inputLogo}
          className="header__input"
          onChange={handleSearch}
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
              {user &&
                (
                  <div
                    className="header__count-books"
                  >
                    <span>
                      {cartBooks.length}
                    </span>
                  </div>)
              }
              <CircleButton
                type="button"
                src={cart}
                className="circle__button"
              />
            </div>
          </Link>
          <Link to="/favorites">
            <div className="button__likes-books">
              <CircleButton
                type="button"
                src={heart}
                className="circle__button"
              />
            </div>
          </Link>
          <Link to="/account">
            <div className="button__account">
              <CircleButton
                type="button"
                src={profile}
                className="circle__button"
              />
            </div>
          </Link>
        </>
      )}
    </StyledHeader >
  );
};

export default Header;
