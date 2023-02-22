import React from 'react';

import EmptyCart from './components/EmptyCart';
import BookInCart from './components/CartList';

import { useAppSelector, useAppDispatch } from '../../../store';

import StyledCartPage from './Cart.style';
import { cartApi } from '../../../api';
import { cartSliceActions } from '../../../store/slices/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const cartBooks = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.cartBooks);
  React.useEffect(() => {
    (async () => {
      if (user) {
        const { cartBooks } = await cartApi.getAll();
        dispatch(cartSliceActions.setAllBooks(cartBooks));
      }
    })();
  }, [dispatch, user]);

  return (
    <StyledCartPage>

      {cartBooks.length
        ? <BookInCart cartProducts={cartBooks} />
        : <EmptyCart />}

    </StyledCartPage>
  );
};

export default Cart;
