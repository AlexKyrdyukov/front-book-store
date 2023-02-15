import React from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import type { BookType } from '../../../store/slices/bookSlice';

import LowBanner from '../components/LowBanner/LowBanner';
import CommentsBook from './components/CommentsBook/CommentsBook';
import CommentCreate from './components/CommentCreate/CommentCreate';
import Recommendation from './components/Recommendation/Recommendation';
import SelectedProduct from './components/SelectredProduct/SelectedProduct';

import errorHandler from '../../../utils/errorHandler';
import changeRating from '../../../utils/ratingHelper';
import { cartApi, bookApi, commentApi } from '../../../api';
import { useAppSelector, useAppDispatch } from '../../../store';
import { userSliceActions } from '../../../store/slices/userSlice';

import StyledProductCard from './ProductPage.style';

const ProductCard: React.FC = () => {
  const [bookState, setBookState] = React.useState<BookType | null>(null);

  const dispatch = useAppDispatch();
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
        const response = await cartApi.addToCart(bookId, user.userId);
        dispatch(userSliceActions.setBooks(response.cartBooks));
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        errorHandler(error);
      }
      console.error(error);
    }
  };

  const onCommentHandler = async (commentText: string) => {
    if (bookId && user) {
      try {
        const response = await commentApi.create(user?.userId, bookId, commentText);
        const { comments } = response;
        setBookState({
          ...bookState as BookType,
          comments,
        });
        return;
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
        commentHandler={onCommentHandler}
      />)}
      {!user && <LowBanner />}
      <h2 className="recommendation__title">Recommendations</h2>
      <Recommendation />
    </StyledProductCard>
  );
};

export default ProductCard;
