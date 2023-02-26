import React from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import type { BookType } from '../../../store/slices/bookSlice';

import LowBanner from '../components/LowBanner/LowBanner';
import CommentsBook from './components/CommentsBook/CommentsBook';
import CommentCreate from './components/CommentCreate/CommentCreate';
import Recommendation from './components/Recommendation/Recommendation';
import SelectedProduct from './components/SelectredProduct/SelectedProduct';

import { socket } from '../../../App';
import errorHandler from '../../../utils/errorHandler';
import { bookApi, commentApi } from '../../../api';
import { useAppSelector } from '../../../store';

import StyledProductCard from './ProductPage.style';
import { cartHelper, favoriteHelper } from '../../../utils';

const ProductCard: React.FC = () => {
  const [bookState, setBookState] = React.useState<BookType | null>(null);

  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const favoriteBooks = useAppSelector(({ rootSlice }) => rootSlice.favoriteSlice.favoriteBooks);
  const cartBooks = useAppSelector(({ rootSlice }) => rootSlice.cartSlice.cartBooks);

  const { bookId } = useParams();

  React.useEffect(() => {
    socket.on('new-comment', ({ comments }) => {
      setBookState({
        ...bookState as BookType,
        comments,
      });
    });

    return () => {
      socket.off('new-comment');
    };
  }, [bookState]);

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

  const onCommentHandler = async (commentText: string) => {
    if (bookId && user) {
      try {
        const response = await commentApi.create(bookId, commentText);
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
          isUser={!!user}
          book={bookState}
          isFavorite={favoriteHelper.handleIsFavorite(
            bookState.bookId, favoriteBooks,
          ) as boolean}
          isInCart={cartHelper.checkIsInCart(
            bookState.bookId, cartBooks,
          ) as boolean}
        />)}
      <CommentsBook
        bookComments={bookState ? bookState.comments : null}
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
