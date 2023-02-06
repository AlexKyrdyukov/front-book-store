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
  const [countState, setCountState] = React.useState<number>(1);
  const params: Record<string, string> = {};

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    searchParams.set('perPage', '12');
    if (!searchParams.get('sortBy')) {
      searchParams.set('sortBy', 'priceInCent');
    }
    if (!searchParams.get('sortDirection')) {
      searchParams.set('sortDirection', 'ASC');
    }
    if (!searchParams.get('page')) {
      searchParams.set('page', '1');
    }
    setSearchParams(searchParams);
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    const getBooks = async () => {
      const response = await dispatch(bookThunks.getBooks(params));
      const { numberOfBooks } = response.payload as PayloadType;
      if (numberOfBooks && (numberOfBooks !== 0)) {
        setCountState(numberOfBooks);
      }
      if (response.payload instanceof AxiosError) {
        errorHandler(response.payload);
      }
    };
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  // eslint-disable-next-line no-console
  console.log(countState);
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
