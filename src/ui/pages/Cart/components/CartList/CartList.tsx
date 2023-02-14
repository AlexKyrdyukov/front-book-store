import { AxiosError } from 'axios';
import React from 'react';
import type { CartType } from '../../../../../api/cartApi';
import cartApi from '../../../../../api/cartApi';

import { useAppDispatch, useAppSelector } from '../../../../../store';
import { cartSliceActions } from '../../../../../store/slices/cartSlice';
import errorHandler from '../../../../../utils/errorHandler';
import BookInCart from '../BookInCart';
import StyledCartList from './CartList.style';

type PropsType = {
  cartBooks: CartType;
};

const CartList: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.userId);
  const cartId = props.cartBooks.cartId;
  const totalPrice = cart
  type ApiType = 'minus' | 'plus' | 'delete';

  const changeCountBook = async (
    bookId: number,
    flag: ApiType,
  ) => {
    if (userId) {
      const cartResponse = {
        plus: cartApi.addingProductQuantity,
        minus: cartApi.deletingQuantity,
        delete: cartApi.deleteFromCart,
      };

      try {
        const response = await cartResponse[flag](bookId, userId, cartId);
        if (flag !== 'delete') {
          dispatch(cartSliceActions.changeCount(response));
          return;
        }
        dispatch(cartSliceActions.deleteById(response));
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

    </StyledCartList>
  );
};

export default CartList;
