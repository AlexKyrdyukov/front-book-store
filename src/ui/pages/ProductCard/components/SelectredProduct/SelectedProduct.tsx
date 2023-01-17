import React from 'react';
import type { BookType } from '../../../../../store/slices/bookSlice';

import StyledSelectedProduct from './SelectedProduct.style';

type PropsType = {
  book: BookType | undefined;
};

const SelectedProduct: React.FC<PropsType> = ({ book }) => {
  return (
    <StyledSelectedProduct>
      {book?.description}
    </StyledSelectedProduct>
  );
};

export default SelectedProduct;
