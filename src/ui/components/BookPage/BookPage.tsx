import React from 'react';
import classNames from 'classnames';

import CircleButton from '../CircleButton';
import BookButton from './components/BookButton';
import Raiting from './components/Raiting/Raiting';

import heart from './image/heart.svg';
import emptyHeart from './image/border_heart.svg';

import StyledBookPage from './BookPage.style';

type PropsType = {
  name?: string;
  author?: string;
  darling?: boolean;
  raiting?: number;
  annotation?: string;
  price?: string;
  inBasket?: boolean;
  src?: string;
};

const BookPage: React.FC<PropsType> = (props) => {
  const annotationStyle = classNames('annotation-new__block', {
    'annotation-bestseller__block': props.annotation === 'bestseller',
  });

  const buyButtonStyle = classNames('buy__button', {
    disabled: !props.price,
  });

  return (
    <StyledBookPage>
      <div>
        <span>
          <CircleButton
            type="button"
            className="darling__button"
            src={props.darling ? heart : emptyHeart}
            alt="heart"
          />
        </span>
        <img src={props.src} alt="" />
        {props.annotation
          ? <div className={annotationStyle}>{props.annotation}</div>
          : null}
      </div>
      <h4>{props.name}</h4>
      <h5>{props.author}</h5>
      <Raiting />
      <BookButton
        disabled={Boolean(props.price)}
        className={buyButtonStyle}
        type="button"
      >
        {props.price
          ? props.price
          : 'Not available'}
      </BookButton>
    </StyledBookPage>
  );
};

export default BookPage;
