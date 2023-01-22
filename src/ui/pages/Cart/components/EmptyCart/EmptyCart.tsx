import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../../components/Button';

import books from './images/books.svg';

import StyledEmptyCart from './EmptyCart.style';

const EmptyCart: React.FC = () => {
  return (
    <StyledEmptyCart>
      <div
        className="empty-cart__block-image"
      >
        <img className="empty-cart__image" src={books} alt="books" />
      </div>
      <div
        className="empty-cart__text-block"
      >
        <h3>Your cart is empty</h3>
        <p>
          Add items to cart to make a purchase.
          Go to the catalogue no.
        </p>
        <Link to="/">
          <Button
            className="empty-cart__button"
          >Go to catalog
          </Button>
        </Link>
      </div>
    </StyledEmptyCart>
  );
};

export default EmptyCart;
