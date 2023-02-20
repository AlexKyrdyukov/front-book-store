import React from 'react';
import { Link } from 'react-router-dom';
import type { ProductType } from '../../../../../api/cartApi';

import BookInCart from '../BookInCart';
import Button from '../../../../components/Button/Button';

import StyledCartList from './CartList.style';

type PropsType = {
  cartProducts: ProductType[];
};

const CartList: React.FC<PropsType> = (props) => {
  const totalPrice = React.useMemo(() => {
    return props.cartProducts.reduce((accum, item) => {
      // eslint-disable-next-line no-param-reassign
      accum += (+item.book.priceInDollar * +item.countBook);
      return accum;
    }, 0);
  }, [props.cartProducts]);

  return (
    <StyledCartList>
      {props.cartProducts.map((item) => (
        <BookInCart
          key={item.bookId}
          book={item}
        />
      ))}
      <p
        className="cart-list__total-price"
      >Total: <span>{totalPrice.toFixed(2)}</span>
      </p>
      <div
        className="cart-list__button-block"
      >
        <Link
          className="cart-list__link-shopping"
          to="/"
        >
          <Button
            className="cart-list__button-shopping"
          >Continue shopping
          </Button>
        </Link>
        <a href="https://gfycat.com/wavyunsungclumber">
          <Button
            className="cart-list__button-checkout"
          >Checkout
          </Button>
        </a>
      </div >
    </StyledCartList >
  );
};

export default CartList;
