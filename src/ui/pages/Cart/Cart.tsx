import React from 'react';

import EmptyCart from './components/EmptyCart';

import { useAppSelector } from '../../../store';

import StyledCartPage from './Cart.style';

const Cart: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.books);
  return (
    <StyledCartPage>
      {!books && <EmptyCart />}
    </StyledCartPage>
  );
};

export default Cart;
