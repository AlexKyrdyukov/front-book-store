import React from 'react';
import type { ProductType } from '../../../../../api/cartApi';

import StyledBookInCart from './BookInCart.style';

type PropsType = {
  book: ProductType;
  cartHandler: (
    bookId: number,
    flag: 'minus' |
      'plus'
  ) => Promise<void>;
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
            onClick={() => props.cartHandler(props.book.bookId, 'minus')}
            className="cart-book__button-minus"
          >-
          </button>
          <p
            className="cart-book__total-count"
          >{props.book.countBook}
          </p>
          <button
            onClick={() => props.cartHandler(props.book.bookId, 'plus')}
            className="cart-book__button-plus"
          >+
          </button>
          <button
            // onClick={() => props.cartHandler(props.book.bookId, 'delete')}
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
