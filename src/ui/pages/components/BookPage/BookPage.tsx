import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import type { BookType } from '../../../../store/slices/bookSlice';

import Rating from '../Rating';
import BookButton from '../BookButton';
import CircleButton from '../../../components/CircleButton';
import changeRating from '../../../../utils/ratingHelper';

import heart from './image/heart.svg';
import emptyHeart from './image/border_heart.svg';
import { favoriteHelper, cartHelper } from '../../../../utils';

import StyledBookPage from './BookPage.style';

type PropsType = {
  book: BookType;
  isFavorite: boolean;
  isInCart: boolean;
  isUser: boolean;
};

const BookPage: React.FC<PropsType> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/productCard/${props.book.bookId}`);
  };

  const annotationStyle = classNames('annotation-new__block', {
    'annotation-bestseller__block': props.book.bestSeller,
  });

  const buyButtonStyle = classNames('buy__button', {
    disabled: !props.book.isInStock,
    added: props.isInCart,
  });

  const checkIsInStock = () => {
    return (!props.isInCart
      ? `$ ${props.book.priceInDollar} USD`
      : 'Added to cart');
  };

  return (
    <StyledBookPage>
      <div className="image__block">
        <span
          className="block__circle-button"
        >
          <CircleButton
            disabled={Boolean(!props.isUser)}
            type="button"
            onClick={() => favoriteHelper.changeFavorites({
              isFavorite: props.isFavorite,
              bookId: props.book.bookId,
            })}
            className="darling__button"
            src={props.isFavorite ? heart : emptyHeart}
            alt="heart"
          />
        </span>
        <img
          onClick={handleClick}
          src={props.book.image} alt="book cover"
        />
        {props.book.bestSeller
          ? <div className={annotationStyle}>Bestseller</div>
          : null
        }
        {props.book.new
          ? <div className={annotationStyle}>New</div>
          : null
        }
      </div>
      <h4 className="book__name"
      >{props.book.name}
      </h4>
      <h5 className="book__author"
      >{props.book.author}
      </h5>
      <Rating
        handleRatingBook={changeRating}
        rating={props.book.averageRating}
        bookId={props.book.bookId}
      />
      <BookButton
        className={buyButtonStyle}
        type="button"
        onClick={() => cartHelper.addById(props.book.bookId)}
        disabled={!props.isUser || props.isInCart || !props.book.isInStock}
      >
        {props.book.isInStock
          ? checkIsInStock()
          : 'Not Availabble'
        }
      </BookButton>
    </StyledBookPage>
  );
};

export default BookPage;
