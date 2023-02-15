import React from 'react';

import EmptyCart from './components/EmptyCart';
import BookInCart from './components/CartList/CartList';

import { useAppSelector } from '../../../store';

import StyledCartPage from './Cart.style';

const Cart: React.FC = () => {
  const cartBooks = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.cart);
  return (
    <StyledCartPage>

      {cartBooks?.selectedProducts.length
        ? <BookInCart cartBooks={cartBooks} />
        : <EmptyCart />}

    </StyledCartPage>
  );
};

export default Cart;
