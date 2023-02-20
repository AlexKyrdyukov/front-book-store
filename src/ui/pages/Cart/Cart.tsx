import React from 'react';

import EmptyCart from './components/EmptyCart';
import BookInCart from './components/CartList';

import { useAppSelector } from '../../../store';

import StyledCartPage from './Cart.style';

const Cart: React.FC = () => {
  const cartProducts = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.cartProducts);
  return (
    <StyledCartPage>

      {cartProducts?.length
        ? <BookInCart cartProducts={cartProducts} />
        : <EmptyCart />}

    </StyledCartPage>
  );
};

export default Cart;
