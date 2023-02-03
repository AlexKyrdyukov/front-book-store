import React from 'react';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';
import Filters from './components/Filtres';
import BooksList from './components/BooksList';

import { useAppDispatch } from '../../../../../store';
import bookThunks from '../../../../../store/thunks/bookThunks';
import errorHandler from '../../../../../utils/errorHandler';

import StyledCatalog from './Catalog.style';

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params: Record<string, string> = {};
  searchParams.forEach((value, key, parent) => {
    params[key] = value;
    // eslint-disable-next-line no-console
    console.log(key, value, parent);
  });
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const getBooks = async () => {
      const response = await dispatch(bookThunks.getBooks(params));
      // const response1 = await bookThunks.filtered();
      if (response.payload instanceof AxiosError) {
        errorHandler(response.payload);
      }
    };
    getBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <StyledCatalog>
      <div className="title-filters__block">

        <h2 className="catalog__title">Catalog</h2>

        <Filters />
      </div>
      <BooksList />
    </StyledCatalog>
  );
};

export default Catalog;
