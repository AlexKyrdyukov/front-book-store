import React from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import type { BookType } from '../../../store/slices/bookSlice';

import LowBanner from '../components/LowBanner/LowBanner';
import CommentCreate from './components/CommentCreate/CommentCreate';
import Recommendation from './components/Recommendation/Recommendation';
import SelectedProduct from './components/SelectredProduct/SelectedProduct';
import CommentsBook from './components/CommentsBook/CommentsBook';

import { useAppSelector } from '../../../store';
import { cartApi, bookApi, commentApi } from '../../../api';
import errorHandler from '../../../utils/errorHandler';
import changeRating from '../../../utils/ratingHelper';

import StyledProductCard from './ProductPage.style';

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

  const addToCartHandler = async (bookId: number) => {
    try {
      if (user?.userId) {
        await cartApi.addToCart(bookId, user.userId);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        errorHandler(error);
      }
      console.error(error);
    }
  };

  const commentHandler = async (commentText: string) => {
    if (bookId && user) {
      try {
        const response = await commentApi.create(user?.userId, bookId, commentText);
        const { comments } = response;
        // eslint-disable-next-line no-console
        console.log(response);
        setBookState({
          ...bookState as BookType,
          comments,
        });
      } catch (error) {
        if (error instanceof AxiosError) {
          errorHandler(error);
          return;
        }
        console.error(error);
      }
    }
  };

  return (
    <StyledProductCard>
      {bookState &&
        (<SelectedProduct
          user={user}
          handleAddBookInCart={addToCartHandler}
          book={bookState}
          handleRating={changeRating}
        />)}
      <CommentsBook
        bookComments={bookState ? bookState.comments : undefined}
      />
      {!!user && (<CommentCreate
        onCommentCreate={commentHandler}
      />)}
      {!user && <LowBanner />}
      <h2 className="recommendation__title">Recommendations</h2>
      <Recommendation />
    </StyledProductCard>
  );
};

export default ProductCard;
