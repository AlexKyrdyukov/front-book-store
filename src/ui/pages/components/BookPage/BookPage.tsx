import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import type { BookType } from '../../../../store/slices/bookSlice';

import CircleButton from '../../../components/CircleButton';
import BookButton from './components/BookButton';
import Raiting from './components/Raiting';

import { bookSliceActions } from '../../../../store/slices/bookSlice';
import { useAppSelector, useAppDispatch } from '../../../../store';

import heart from './image/heart.svg';
import emptyHeart from './image/border_heart.svg';

import StyledBookPage from './BookPage.style';

type PropsType = {
  book: BookType;
};

const BookPage: React.FC<PropsType> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);

  const handleClick = () => {
    navigate(`/productCard/${props.book.bookId}`);
  };

  const annotationStyle = classNames('annotation-new__block', {
    'annotation-bestseller__block': props.book.annotation === 'Bestseller',
  });

  const buyButtonStyle = classNames('buy__button', {
    disabled: !props.book.isAvailable,
  });

  const handleDarling = () => {
    dispatch(bookSliceActions.changeBookDarling(props.book.bookId));
  };

  return (
    <StyledBookPage>
      <div className="image__block"
      >
        <span className="block__circle-button">
          <CircleButton
            disabled={Boolean(!user)}
            type="button"
            onClick={handleDarling}
            className="darling__button"
            src={props.book.darling ? heart : emptyHeart}
            alt="heart"
          />
        </span>
        <img
          onClick={handleClick}
          src={props.book.image} alt="book cover"
        />
        {props.book.annotation &&
          <div className={annotationStyle}>{props.book.annotation}</div>
        }
      </div>
      <h4 className="book__name">{props.book.name}</h4>
      <h5 className="book__author">{props.book.author}</h5>
      <Raiting raiting={props.book.raiting} />
      <BookButton
        disabled={Boolean(props.book.price)}
        className={buyButtonStyle}
        type="button"
      >
        {props.book.isAvailable
          ? `$ ${props.book.price} USD`
          : 'Not available'}
      </BookButton>
    </StyledBookPage>
  );
};

export default BookPage;
