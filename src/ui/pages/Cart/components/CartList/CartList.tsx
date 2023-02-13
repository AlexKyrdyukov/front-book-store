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

  const changeCountBook = async (
    bookId: number,
    flag: 'minus' | 'plus' | 'delete',
  ) => {
    if (userId) {
      const select = {
        plus: cartApi.addingProductQuantity,
        minus: cartApi.deletingQuantity,
        delete: cartApi.deleteFromCart,
      };
      try {
        // eslint-disable-next-line no-console
        console.log('select');
        const response = await select[flag](bookId, userId, cartId);
        // // dispatch(cartSliceActions.setBook(response.books));
        // eslint-disable-next-line no-console
        console.log(response);
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
