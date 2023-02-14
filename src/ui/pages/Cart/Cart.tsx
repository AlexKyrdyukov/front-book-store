import React from 'react';

import EmptyCart from './components/EmptyCart';
import BookInCart from './components/CartList/CartList';
import { useAppSelector, useAppDispatch } from '../../../store';

import StyledCartPage from './Cart.style';
import { cartApi } from '../../../api';
import { cartSliceActions } from '../../../store/slices/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartBooks = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.cartBooks);
  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.userId);

  React.useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const response = await cartApi.getAllFromCart(userId);
          dispatch(cartSliceActions.setBooks(response.cartBooks));
        }
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <StyledCartPage>
      {cartBooks?.selectedProducts.length
        ? <BookInCart cartBooks={cartBooks} />
        : <EmptyCart />}
    </StyledCartPage>
  );
};

export default Cart;
