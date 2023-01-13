import React from 'react';

import Filtres from './components/Filtres';
import BooksList from './components/BooksList';

import { useAppDispatch } from '../../../../../store';
import { bookSliceActions } from '../../../../../store/slices/bookSlice';

import bookCover from './images/book_narnia.svg';

import StyledCatalog from './Catalog.style';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = [{
    id: 1,
    name: 'The Chronicles of Narnia',
    author: 'C. S. Lewis',
    darling: false,
    raiting: 4.6,
    annotation: 'Bestseller',
    price: '$14.99 USD',
    inBasket: false,
    src: bookCover,
  }, {
    id: 2,
    name: 'The Chronicles of Narnia',
    author: 'C. S. Lewis',
    darling: false,
    raiting: 4.6,
    annotation: 'new',
    inBasket: false,
    src: bookCover,
  }, {
    id: 3,
    name: 'The Chronicles of Narnia',
    author: 'C. S. Lewis',
    darling: false,
    raiting: 4.6,
    inBasket: false,
    src: bookCover,
  }, {
    id: 4,
    name: 'The Chronicles of Narnia',
    author: 'C. S. Lewis',
    darling: false,
    raiting: 4.6,
    annotation: 'new',
    inBasket: false,
    src: bookCover,
  }];

  React.useEffect(() => {
    dispatch(bookSliceActions.setBooksState(books));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <StyledCatalog>
      <div className="title-filters__block">

        <h2 className="catalog__title">Catalog</h2>

        <Filtres />
      </div>
      <BooksList />
    </StyledCatalog>
  );
};

export default Catalog;
