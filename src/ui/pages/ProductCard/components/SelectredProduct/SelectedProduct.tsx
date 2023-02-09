import React from 'react';

import type { BookType } from '../../../../../store/slices/bookSlice';
import BookButton from '../../../components/BookButton';
import Raiting from '../../../components/Raiting';

import StyledSelectedProduct from './SelectedProduct.style';

type PropsType = {
  book: BookType | null | undefined;
  handleRaiting: (
    bookId: number,
    newRaiting: number,
    userId: number) => Promise<ResponseType>;
};

type ResponseType = {
  newRaiting: number;
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
        <Raiting
          handleRaitingBook={props.handleRaiting}
          raiting={props.book!.raiting}
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
          <BookButton>{props.book?.coverType.includes('Paperback') ? props.book.priceInDollar : 'Not available'}</BookButton>
        </div>
        <div>
          <span>HardCover</span>
          <BookButton>{props.book?.coverType.includes('Hardcover') ? props.book.priceInDollar : 'Not available'}</BookButton>
        </div>
      </div>

    </StyledSelectedProduct>
  );
};

export default SelectedProduct;
