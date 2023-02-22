import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import GanrDropDown from '../GanrDropDown';
import PriceDropDown from '../PriceDropDown';
import DropDownButton from '../DropDownButton';
import SortByDropDown from '../SortByDropDown';
import errorHandler from '../../../../../utils/errorHandler';

import { cartApi, favoritesApi, genresApi } from '../../../../../api';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { cartSliceActions } from '../../../../../store/slices/cartSlice';
import { favoriteSliceActions } from '../../../../../store/slices/favoriteSlice';

import StyledFiltres from './Filtres.style';

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
    (async () => {
      try {
        const { genres } = await genresApi.getAll();
        setGenres(genres);
        if (user) {
          const { favoriteBooks } = await favoritesApi.getAll();
          const { cartBooks } = await cartApi.getAll();
          dispatch(cartSliceActions.setAllBooks(cartBooks));
          dispatch(favoriteSliceActions.setAllBooks(favoriteBooks));
        }
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
