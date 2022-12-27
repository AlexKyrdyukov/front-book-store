import React from 'react';

import { StyledCartPage } from './Cart.style';

type PropsType = {
  value?: string;
};

const Cart: React.FC<PropsType> = () => {
  return (
    <StyledCartPage>
      <div>Cart</div>
    </StyledCartPage>
  );
};

export default Cart;
