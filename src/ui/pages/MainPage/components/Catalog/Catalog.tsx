import React from 'react';
import { AxiosError } from 'axios';

import Filtres from './components/Filtres';
import BooksList from './components/BooksList';

import { useAppDispatch } from '../../../../../store';
import bookThunks from '../../../../../store/thunks/bookThunks';
import errorHandler from '../../../../../utils/errorHandler';

import StyledCatalog from './Catalog.style';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const getBooks = async () => {
      const response = await dispatch(bookThunks.getBooks());
      if (response.payload instanceof AxiosError) {
        errorHandler(response.payload);
      }
    };
    getBooks();
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
