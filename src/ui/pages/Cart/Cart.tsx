import React from 'react';

import EmptyCart from './components/EmptyCart';

import { useAppSelector } from '../../../store';

import StyledCartPage from './Cart.style';
import { cartApi } from '../../../api';

const Cart: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.books);
  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.userId);

  React.useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const response = await cartApi.getAllFromCart(userId);
          // eslint-disable-next-line no-console
          console.log(response);
        }
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledCartPage>
      {books && <EmptyCart />}
    </StyledCartPage>
  );
};

export default Cart;
