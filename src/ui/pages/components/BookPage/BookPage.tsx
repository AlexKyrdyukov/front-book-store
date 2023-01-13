import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import type { BookType } from '../../../../store/slices/bookSlice';

import CircleButton from '../../../components/CircleButton';
import BookButton from './components/BookButton';
import Raiting from './components/Raiting';

import heart from './image/heart.svg';
import emptyHeart from './image/border_heart.svg';

import StyledBookPage from './BookPage.style';

type PropsType = {
  book: BookType;
};

const BookPage: React.FC<PropsType> = (props) => {
  const navigate = useNavigate();

  const annotationStyle = classNames('annotation-new__block', {
    'annotation-bestseller__block': props.book.annotation === 'bestseller',
  });

  const buyButtonStyle = classNames('buy__button', {
    disabled: !props.book.price,
  });

  const handleClick = () => {
    navigate(`productCard/:${props.book.id}`);
  };

  return (
    <StyledBookPage>
      <span>
        <CircleButton
          type="button"
          className="darling__button"
          src={props.book.darling ? heart : emptyHeart}
          alt="heart"
        />
      </span>
      <div
        onClick={handleClick}
      >
        <img src={props.book.src} alt="" />
      </div>
      {props.book.annotation
        ? <div className={annotationStyle}>{props.book.annotation}</div>
        : null}
      <h4>{props.book.name}</h4>
      <h5>{props.book.author}</h5>
      <Raiting />
      <BookButton
        disabled={Boolean(props.book.price)}
        className={buyButtonStyle}
        type="button"
      >
        {props.book.price
          ? props.book.price
          : 'Not available'}
      </BookButton>
    </StyledBookPage>
  );
};

export default BookPage;
