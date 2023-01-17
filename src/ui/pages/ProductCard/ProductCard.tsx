import React from 'react';
import { AxiosError } from 'axios';
import { useParams } from 'react-router-dom';

import type { BookType } from '../../../store/slices/bookSlice';

import LowBanner from '../components/LowBanner';
import Recommendation from './components/Recommendation';
import SelectedProduct from './components/SelectredProduct/SelectedProduct';

import { useAppSelector } from '../../../store';
import bookApi from '../../../api/bookApi';
import errorHandler from '../../../utils/errorHandler';

import StyledProductCard from './ProductCard.style';

const ProductCard: React.FC = () => {
  const [bookState, setBookState] = React.useState<BookType>();
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);

  const { bookId } = useParams();
  // eslint-disable-next-line no-console
  console.log(bookId);
  React.useEffect(() => {
    (async () => {
      try {
        const response = await bookApi.getById(bookId);
        setBookState(response.book);
      } catch (error) {
        if (error instanceof AxiosError) {
          return errorHandler(error);
        }
      }
    })();
    // return setBookState({});
  }, [bookId]);
  // eslint-disable-next-line no-console
  console.log(bookState);
  return (
    <StyledProductCard>
      ProductCart
      <SelectedProduct book={bookState} />
      {!user && <LowBanner />}
      <h2 className="recommendation__title">Recommendations</h2>
      <Recommendation />
    </StyledProductCard>
  );
};

export default ProductCard;
