import React from 'react';

import classNames from 'classnames';
import type { BookType } from '../../../../../store/slices/bookSlice';

import Rating from '../../../components/Rating';
import BookButton from '../../../components/BookButton';
import changeRating from '../../../../../utils/ratingHelper';

import StyledSelectedProduct from './SelectedProduct.style';
import { cartHelper } from '../../../../../utils';

type PropsType = {
  book: BookType | null | undefined;
  isUser: boolean;
  isFavorite: boolean;
  isInCart: boolean;
};

const SelectedProduct: React.FC<PropsType> = (props) => {
  const checkIsInStock = () => {
    return (!props.isInCart
      ? `$ ${props?.book?.priceInDollar} USD`
      : 'Added to cart');
  };

  const buyButtonStyle = classNames('buy__button', {
    disabled: !props?.book?.isInStock,
    added: props.isInCart,
  });

  return (
    <StyledSelectedProduct>
      <div className="product__image-block">
        <img className="product__image" src={props.book?.image} alt="book cover" />
      </div>
      <div className="product__text-block">
        <h3>{props.book?.name}</h3>
        <h5>{props.book?.author}</h5>
        <Rating
          handleRatingBook={changeRating}
          rating={props.book!.averageRating}
          bookId={props.book!.bookId}
        />
        <div className="product__description-block">
          <h4>Description</h4>
          <p>{props.book?.description}</p>
        </div>
      </div>
      <div>
        <div>
          <span>HardCover</span>
          <BookButton
        className={buyButtonStyle}
        disabled={!props.isUser || props?.isInCart || !props?.book?.isInStock}
            onClick={() => cartHelper.addById(props.book!.bookId)}
          >{props?.book?.isInStock
            ? checkIsInStock()
            : 'Not Availabble'
          }
          </BookButton>
        </div>
      </div>

    </StyledSelectedProduct>
  );
};

export default SelectedProduct;
