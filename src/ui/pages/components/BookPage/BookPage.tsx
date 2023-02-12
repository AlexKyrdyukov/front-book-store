import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import type { BookType } from '../../../../store/slices/bookSlice';

import CircleButton from '../../../components/CircleButton';
import BookButton from '../BookButton';
import Rating from '../Rating';

import { userSliceActions } from '../../../../store/slices/userSlice';
import { useAppSelector, useAppDispatch } from '../../../../store';
import { bookApi } from '../../../../api';

import heart from './image/heart.svg';
import emptyHeart from './image/border_heart.svg';

import StyledBookPage from './BookPage.style';

type PropsType = {
  book: BookType;
  handleRating: (
    bookId: number,
    newRating: number,
    userId: number) => Promise<ResponseType>;
  handleAddBookInCart: (bookId: number) => Promise<void>;
};

type ResponseType = {
  rating: number;
  bookId: number;
};

const BookPage: React.FC<PropsType> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);

  const handleClick = () => {
    navigate(`/productCard/${props.book.bookId}`);
  };

  const annotationStyle = classNames('annotation-new__block', {
    'annotation-bestseller__block': props.book.bestSeller,
  });

  const buyButtonStyle = classNames('buy__button', {
    disabled: !props.book.isInStock,
  });

  const handleDarling = async () => {
    const response = await bookApi.likeBook(props.book.bookId, user?.userId);
    dispatch(userSliceActions.setUser(response.user));
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
            src={
              (user &&
                (user?.likeBooks?.findIndex((item) => item.bookId === props.book.bookId) !== -1))
                ? heart
                : emptyHeart}
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
      <h4 className="book__name">{props.book.name}</h4>
      <h5 className="book__author">{props.book.author}</h5>
      <Rating
        handleRatingBook={props.handleRating}
        rating={props.book.averageRating}
        bookId={props.book.bookId}
      />
      <BookButton
        className={buyButtonStyle}
        type="button"
        onClick={() => props.handleAddBookInCart(props.book.bookId)}
      >
        {props.book.isInStock
          ? `$ ${props.book.priceInDollar} USD`
          : 'Not available'}
      </BookButton>
    </StyledBookPage>
  );
};

export default BookPage;
