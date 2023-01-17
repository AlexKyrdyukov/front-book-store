import React from 'react';
import type { BookType } from '../../../../../store/slices/bookSlice';
import BookButton from '../../../components/BookPage/components/BookButton/BookButton';
import Raiting from '../../../components/BookPage/components/Raiting/Raiting';

import StyledSelectedProduct from './SelectedProduct.style';

type PropsType = {
  book: BookType | undefined;
};

const SelectedProduct: React.FC<PropsType> = ({ book }) => {
  return (
    <StyledSelectedProduct>
      <div>
        <img src={book?.image} alt="book cover" />
      </div>
      <div>
        <h3>{book?.name}</h3>
        <h5>{book?.author}</h5>
        <Raiting raiting={book?.raiting} />
        <div>
          <h4>Description</h4>
          <p>{book?.description}</p>
        </div>
        <div>
          <span>Paperback</span>
          <BookButton>{book?.coverType === 'Paperback' ? book.price : 'Not available'}</BookButton>
          <span>HardCover</span>
          <BookButton>{book?.coverType === 'Hardcover' ? book.price : 'Not available'}</BookButton>
        </div>
      </div>

    </StyledSelectedProduct>
  );
};

export default SelectedProduct;
