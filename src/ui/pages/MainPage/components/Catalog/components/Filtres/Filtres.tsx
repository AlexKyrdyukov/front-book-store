import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { genresApi } from '../../../../../../../api';

import GanrDropDown from './components/GanrDropDown';
import SortByDropDown from './components/SortByDropDown';
import PriceDropDown from './components/PriceDropDown';
import DropDownButton from './components/DropDownButton';
import errorHandler from '../../../../../../../utils/errorHandler';

import StyledFiltres from './Filtres.style';

type GenreType = {
  genreId: number;
  name: string;
};

const Filters: React.FC = () => {
  const [genres, setGenres] = React.useState<GenreType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    if (!searchParams.get('sortBy')) {
      searchParams.set('sortBy', 'Price');
      setSearchParams(searchParams);
    }
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
  }, [searchParams]);
  const sortTitle = React.useMemo(() => {
    return searchParams.get('sortBy')?.toLowerCase();
  }, [searchParams]);
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
        title={`Sort by ${sortTitle}`}
        component={<SortByDropDown />}
      />
    </StyledFiltres>
  );
};

export default Filters;
