import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import Filters from '../Filtres';
import BooksList from '../BooksList';
import Pagination from '../Pagination/Pagination';
import { useAppDispatch } from '../../../../../store';
import { bookSliceActions } from '../../../../../store/slices/bookSlice';

import StyledCatalog from './Catalog.style';
import { bookApi } from '../../../../../api';
import errorHandler from '../../../../../utils/errorHandler';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const [countState, setCountState] = React.useState<number>(1);
  React.useEffect(() => {
    try {
      (async () => {
        const params: Record<string, string> = {};
        searchParams.forEach((value, key) => {
          params[key] = value;
        });
        const response = await bookApi.filtered(params);
        dispatch(bookSliceActions.setBooksState(response.books));
        setCountState(response.totalBooks);
        searchParams.set('page', String(response.numberOfPage));
        setSearchParams(searchParams);
      })();
    } catch (error) {
      if (error instanceof AxiosError) {
        errorHandler(error);
        return;
      }
      console.error(error);
    }
  }, [dispatch, searchParams, setSearchParams]);

  return (
    <StyledCatalog>
      <div className="title-filters__block">
        <h2 className="catalog__title">Catalog</h2>
        <Filters />
      </div>
      <BooksList />
      <Pagination countBooks={countState} />
    </StyledCatalog>
  );
};

export default Catalog;
