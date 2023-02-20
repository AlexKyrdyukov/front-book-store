import React from 'react';
import type { ProductType } from '../../../../../api/cartApi';
import { cartHelper } from '../../../../../utils';
import StyledBookInCart from './BookInCart.style';

type PropsType = {
  book: ProductType;
};

const BookInCart: React.FC<PropsType> = (props) => {
  return (
    <StyledBookInCart>
      <img
        src={props.book.book.image} alt="book cover"
      />
      <div>
        <p
          className="cart-book__name"
        >{props.book.book.name}
        </p>
        <p
          className="cart-book__author"
        >{props.book.book.author}
        </p>
        <div
          className="cart-book__button-block"
        >
          <button
            onClick={() => cartHelper.changeTotalCount(props.book.bookId, props.book.countBook - 1)}
            className="cart-book__button-minus"
          >-
          </button>
          <p
            className="cart-book__total-count"
          >{props.book.countBook}
          </p>
          <button
            onClick={() => cartHelper.changeTotalCount(props.book.bookId, props.book.countBook + 1)}
            className="cart-book__button-plus"
          >+
          </button>
          <button
            onClick={() => cartHelper.deleteById(props.book.bookId)}
            className="cart-book__button-delete"
          >del
          </button>
        </div>
        <p
          className="cart-book__book-price"
        >$ {(Number(props.book.book.priceInDollar) * props.book.countBook).toFixed(2)} USD
        </p>
      </div>
    </StyledBookInCart >
  );
};

export default BookInCart;
