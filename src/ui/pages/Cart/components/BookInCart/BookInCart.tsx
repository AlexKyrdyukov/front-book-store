import React from 'react';

import StyledBookInCart from './BookInCart.style';

import type { ProductType } from '../../../../../api/cartApi';

type PropsType = {
  book: ProductType;
};

const BookInCart: React.FC<PropsType> = (props) => {
  return (
    <StyledBookInCart>
      <img src={props.book.book.image} alt="book cover" />
      <p className="cart-book__name">{props.book.book.name}</p>
      <p className="cart-book__author">{props.book.book.author}</p>
      <div className="cart-book__button-block">
        <button>-</button>
        <p>{props.book.countBook}</p>
        <button >+</button>
        <button>del</button>
      </div>
      <p>$ {props.book.book.priceInDollar} USD</p>
    </StyledBookInCart>
  );
};

export default BookInCart;
