import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { genresApi } from '../../../../../api';

import GanrDropDown from '../GanrDropDown';
import SortByDropDown from '../SortByDropDown';
import PriceDropDown from '../PriceDropDown';
import DropDownButton from '../DropDownButton';
import errorHandler from '../../../../../utils/errorHandler';

import StyledFiltres from './Filtres.style';

type GenreType = {
  genreId: number;
  name: string;
};

const Filters: React.FC = React.memo(() => {
  const [genres, setGenres] = React.useState<GenreType[]>([]);
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    (async () => {
      try {
        const { genres } = await genresApi.getAll();
        setGenres(genres);
      } catch (error) {
        if (error instanceof AxiosError) {
          errorHandler(error);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
