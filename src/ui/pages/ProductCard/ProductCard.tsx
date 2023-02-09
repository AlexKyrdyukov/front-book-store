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
import CommentsBook from './components/CommentsBook/CommentsBook';

export const changeRaiting =
  async (bookId: number, newRaiting: number, userId: number) => {
    try {
      const response = await bookApi.changeRaiting(bookId, newRaiting, userId);
      // eslint-disable-next-line no-console
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

const ProductCard: React.FC = () => {
  const [bookState, setBookState] = React.useState<BookType | null>(null);

  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);

  const { bookId } = useParams();

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
    return setBookState(null);
  }, [bookId]);

  return (
    <StyledProductCard>
      {bookState &&
        (<SelectedProduct
          book={bookState}
          handleRaiting={changeRaiting}
        />)}
      <CommentsBook />
      {!user && <LowBanner />}
      <h2 className="recommendation__title">Recommendations</h2>
      <Recommendation />
    </StyledProductCard>
  );
};

export default ProductCard;
