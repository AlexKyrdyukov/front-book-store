import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { bookApi, cartApi, favoritesApi, genresApi } from '../../../../../api';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import GanrDropDown from '../GanrDropDown';
import SortByDropDown from '../SortByDropDown';
import PriceDropDown from '../PriceDropDown';
import DropDownButton from '../DropDownButton';
import errorHandler from '../../../../../utils/errorHandler';

import StyledFiltres from './Filtres.style';
import { bookSliceActions } from '../../../../../store/slices/bookSlice';
import { cartSliceActions } from '../../../../../store/slices/cartSlice';
import { favoriteSliceActions } from '../../../../../store/slices/favoriteSlice';

type GenreType = {
  genreId: number;
  name: string;
};

const Filters: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const [genres, setGenres] = React.useState<GenreType[]>([]);
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    try {
      (async () => {
        const params: Record<string, string> = {};
        searchParams.forEach((value, key) => {
          params[key] = value;
        });
        const response = await bookApi.filtered(params);
        dispatch(bookSliceActions.setBooksState(response.books));
        // setCountState(response.totalBooks);
        // eslint-disable-next-line no-console
        console.log(response);
      })();
    } catch (error) {
      if (error instanceof AxiosError) {
        errorHandler(error);
        return;
      }
      console.error(error);
    }
  }, [dispatch, searchParams]);

  React.useEffect(() => {
    (async () => {
      try {
        const { genres } = await genresApi.getAll();
        if (user) {
          const { favoriteBooks } = await favoritesApi.getAll();
          const { cartBooks } = await cartApi.getAll();
          dispatch(cartSliceActions.setAllBooks(cartBooks));
          dispatch(favoriteSliceActions.setAllBooks(favoriteBooks));
        }
        setGenres(genres);
      } catch (error) {
        if (error instanceof AxiosError) {
          errorHandler(error);
        }
      }
    })();
  }, [dispatch, user]);

  const sortTitle = React.useMemo(() => {
    return searchParams.get('sortBy') as string;
  }, [searchParams]);

  const sortByOptions: Record<string, string> = {
    priceInCent: 'Price',
    name: 'Name',
    author: 'Author name',
    averageRating: 'Rating',
    dateOfIssue: 'Date of issue',
  };

  return (
    <StyledFiltres>
      <DropDownButton
        title="Genre"
        component={<GanrDropDown genres={genres} />}
      />
      <DropDownButton
        title="Price"
        component={<PriceDropDown />}
      />
      <DropDownButton
        title={`Sort by ${sortByOptions[sortTitle]?.toLowerCase() || 'price'}`}
        component={<SortByDropDown />}
      />
    </StyledFiltres>
  );
});

export default Filters;
