import React from 'react';

import type { UserType } from '../../../../../types/userType';
import type { BookType } from '../../../../../store/slices/bookSlice';

import Rating from '../../../components/Rating';
import BookButton from '../../../components/BookButton';

import StyledSelectedProduct from './SelectedProduct.style';

type PropsType = {
  book: BookType | null | undefined;
  user: UserType | null;
  handleRating: (
    bookId: number,
    newRating: number,
    userId: number) => Promise<ResponseType>;
  handleAddBookInCart: (bookId: number) => Promise<void>; //
};

type ResponseType = {
  rating: number;
  bookId: number;
};

const SelectedProduct: React.FC<PropsType> = (props) => {
  return (
    <StyledSelectedProduct>
      <div className="product__image-block">
        <img className="product__image" src={props.book?.image} alt="book cover" />
      </div>
      <div className="product__text-block">
        <h3>{props.book?.name}</h3>
        <h5>{props.book?.author}</h5>
        <Rating
          handleRatingBook={props.handleRating}
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
          <span>Paperback</span>
          <BookButton
            className="product__button"
            disabled={!props.user}
            onClick={() => props.handleAddBookInCart(props!.book!.bookId)}
          >{
              props.book?.isInStock
                ? `$ ${props.book.priceInDollar} USD`
                : 'Not available'}
          </BookButton>
        </div>
        <div>
          <span>HardCover</span>
          <BookButton
            className="product__button"
            disabled={!props.user}
            onClick={() => props.handleAddBookInCart(props!.book!.bookId)}
          >{
              props.book?.isInStock
                ? `$ ${props.book.priceInDollar} USD`
                : 'Not available'}
          </BookButton>
        </div>
      </div>

    </StyledSelectedProduct>
  );
};

export default SelectedProduct;