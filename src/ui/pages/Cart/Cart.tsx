import React from 'react';

import StyledCartPage from './Cart.style';
import { useAppSelector } from '../../../store';

import EmptyCart from './components/EmptyCart';

const Cart: React.FC = () => {
  const book = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.book);
  return (
    <StyledCartPage>
      {!book && <EmptyCart />}
    </StyledCartPage>
  );
};

export default Cart;
