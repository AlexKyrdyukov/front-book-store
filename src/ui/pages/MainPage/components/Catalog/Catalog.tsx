import React from 'react';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';

import Filters from '../Filtres';
import BooksList from '../BooksList';
import Pagination from '../Pagination/Pagination';

import { useAppDispatch } from '../../../../../store';
import errorHandler from '../../../../../utils/errorHandler';
import bookThunks from '../../../../../store/thunks/bookThunks';

import StyledCatalog from './Catalog.style';

type PayloadType = {
  totalBooks: number;
  numberOfPage: number;
};

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countState, setCountState] = React.useState<number>(1);
  const params: Record<string, string> = {};

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!searchParams.get('sortDirection')) {
      searchParams.set('sortDirection', 'ASC');
    }
    setSearchParams(searchParams);
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    const getBooks = async () => {
      const response = await dispatch(bookThunks.getBooks(params));
      const { totalBooks, numberOfPage } = response.payload as PayloadType;
      searchParams.set('page', String(numberOfPage));
      setSearchParams(searchParams);
      if (totalBooks && (totalBooks !== 0)) {
        setCountState(totalBooks);
      }
      if (response.payload instanceof AxiosError) {
        errorHandler(response.payload);
      }
    };
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
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
