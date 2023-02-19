import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import type { BookType } from '../../../../store/slices/bookSlice';

import Rating from '../Rating';
import BookButton from '../BookButton';
import CircleButton from '../../../components/CircleButton';

import { userSliceActions } from '../../../../store/slices/userSlice';
import { useAppSelector, useAppDispatch } from '../../../../store';
import { favoritesApi } from '../../../../api';

import heart from './image/heart.svg';
import emptyHeart from './image/border_heart.svg';

import StyledBookPage from './BookPage.style';

type PropsType = {
  book: BookType;
  handleRating: (
    bookId: number,
    newRating: number,
  ) => Promise<ResponseType>;
  handleAddBookInCart: (bookId: number) => Promise<void>;
};

type ResponseType = {
  newRating: number;
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

  const handleDarling = React.useCallback(async (isFavorite: boolean) => {
    // eslint-disable-next-line no-console
    console.log(isFavorite);
    if (!isFavorite) {
      const response = await favoritesApi.addById(props.book.bookId);
      dispatch(userSliceActions.setFavoriteBooks(response.favoriteBook));
      return;
    }
    const response = await favoritesApi.deleteById(props.book.bookId);
    dispatch(userSliceActions.setFavoriteBooks(response.favoriteBook));
  }, [dispatch, props.book.bookId]);

  const favoriteBook = React.useMemo(() => {
    const flag = user?.favoriteBooks?.findIndex((item) => {
      return item.bookId === props.book.bookId;
    });
    // eslint-disable-next-line no-console
    console.log(flag);
    return flag !== -1;
  }, [props.book.bookId, user?.favoriteBooks]);

  return (
    <StyledBookPage>
      <div className="image__block">
        <span
          className="block__circle-button"
        >
          <CircleButton
            disabled={Boolean(!user)}
            type="button"
            onClick={() => handleDarling(favoriteBook)}
            className="darling__button"
            src={favoriteBook ? heart : emptyHeart}
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
        handleRatingBook={props.handleRating}
        rating={props.book.averageRating}
        bookId={props.book.bookId}
      />
      <BookButton
        className={buyButtonStyle}
        type="button"
        onClick={() => props.handleAddBookInCart(props.book.bookId)}
        disabled={!user}
      >
        {props.book.isInStock
          ? `$ ${props.book.priceInDollar} USD`
          : 'Not available'}
      </BookButton>
    </StyledBookPage>
  );
};

export default BookPage;
