import React from 'react';
import type { CartType } from '../../../../../api/cartApi';

import BookInCart from '../BookInCart';
import StyledCartList from './CartList.style';

type PropsType = {
  books: CartType['selectedProducts'];
};

const CartList: React.FC<PropsType> = (props) => {
  return (
    <StyledCartList>
      {props.books.map((item) => (
        <BookInCart
          key={item.bookId}
          book={item}
        />
      ))}
    </StyledCartList>
  );
};

export default CartList;
