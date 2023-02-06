import React from 'react';

import type { BookType } from '../../../../../store/slices/bookSlice';
import BookButton from '../../../components/BookButton';
import Raiting from '../../../components/Raiting';

import StyledSelectedProduct from './SelectedProduct.style';

type PropsType = {
  book: BookType | null | undefined;
};

const SelectedProduct: React.FC<PropsType> = ({ book }) => {
  return (
    <StyledSelectedProduct>
      <div className="product__image-block">
        <img className="product__image" src={book?.image} alt="book cover" />
      </div>
      <div className="product__text-block">
        <h3>{book?.name}</h3>
        <h5>{book?.author}</h5>
        <Raiting
          raiting={book!.raiting}
        />
        <div className="product__description-block">
          <h4>Description</h4>
          <p>{book?.description}</p>
        </div>
      </div>
      <div>
        <div>
          <span>Paperback</span>
          <BookButton>{book?.coverType.includes('Paperback') ? book.priceInDollar : 'Not available'}</BookButton>
        </div>
        <div>
          <span>HardCover</span>
          <BookButton>{book?.coverType.includes('Hardcover') ? book.priceInDollar : 'Not available'}</BookButton>
        </div>
      </div>

    </StyledSelectedProduct>
  );
};

export default SelectedProduct;
