import React from 'react';
import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';
import type { CartType } from '../../../../../api/cartApi';

import BookInCart from '../BookInCart';
import Button from '../../../../components/Button/Button';

import cartApi from '../../../../../api/cartApi';
import errorHandler from '../../../../../utils/errorHandler';
import { userSliceActions } from '../../../../../store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../../../../store';

import StyledCartList from './CartList.style';

type PropsType = {
  cartBooks: CartType;
};

const CartList: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.userId);
  const cartId = props.cartBooks.cartId;

  const totalPrice = React.useMemo(() => {
    return props.cartBooks.selectedProducts.reduce((accum, item) => {
      // eslint-disable-next-line no-param-reassign
      accum += (+item.book.priceInDollar * +item.countBook);
      return accum;
    }, 0);
  }, [props.cartBooks.selectedProducts]);
  type ApiType = 'minus' | 'plus';

  const changeCountBook = async (
    bookId: number,
    flag: ApiType,
  ) => {
    if (userId) {
      const cartResponse = {
        plus: cartApi.changeQuantity,
        minus: cartApi.changeQuantity,
        // delete: cartApi.deleteFromCart, // develop
      };

      try {
        // const response = await cartResponse[flag](bookId, userId, cartId);
        // dispatch(userSliceActions.changeCount(response));
        // dispatch(userSliceActions.deleteById(response));
      } catch (error) {
        if (error instanceof AxiosError) {
          errorHandler(error);
          return;
        }
        console.error(error);
      }
    }
  };

  return (
    <StyledCartList>
      {props.cartBooks.selectedProducts.map((item) => (
        <BookInCart
          key={item.bookId}
          book={item}
          cartHandler={changeCountBook}
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
