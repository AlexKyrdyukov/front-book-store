import React from 'react';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';

import Filters from './components/Filtres';
import BooksList from './components/BooksList';
import Pagination from './components/Pagination/Pagination';

import { useAppDispatch } from '../../../../../store';
import bookThunks from '../../../../../store/thunks/bookThunks';
import errorHandler from '../../../../../utils/errorHandler';

import StyledCatalog from './Catalog.style';

type PayloadType = {
  numberOfBooks: number;
};

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params: Record<string, string> = {};
  let count = 100;

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    searchParams.forEach((value, key, parent) => {
      params[key] = value;
      // eslint-disable-next-line no-console
      console.log(key, value, parent);
    });
    const getBooks = async () => {
      const response = await dispatch(bookThunks.getBooks(params));
      const { numberOfBooks } = response.payload as PayloadType;
      if (numberOfBooks) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        count = numberOfBooks;
      }
      if (response.payload instanceof AxiosError) {
        errorHandler(response.payload);
      }
    };
    getBooks();
  }, [searchParams, setSearchParams]);

  return (
    <StyledCatalog>
      <div className="title-filters__block">

        <h2 className="catalog__title">Catalog</h2>

        <Filters />
      </div>
      <BooksList />
      <Pagination countBooks={count} />
    </StyledCatalog>
  );
};

export default Catalog;
