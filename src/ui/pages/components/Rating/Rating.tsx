import React from 'react';
import { Rating } from 'react-simple-star-rating';

import { useAppSelector, useAppDispatch } from '../../../../store';
import { bookSliceActions } from '../../../../store/slices/bookSlice';

import StyledRating from './Rating.style';

type PropType = {
  rating: number;
  bookId: number;
  handleRatingBook: (
    bookId: number,
    newRating: number,
  ) => Promise<ResponseType>;
};

type ResponseType = {
  newRating: number;
  bookId: number;
};

const BookRating: React.FC<PropType> = (props) => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const dispatch = useAppDispatch();
  const [rating, setRating] = React.useState((props.rating / 10).toFixed(1));

  const handleRating = async (rate: number) => {
    try {
      if (user) {
        const response = await props.handleRatingBook(props.bookId, rate);
        dispatch(bookSliceActions.setNewRating(response));
        setRating(String(response.newRating));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledRating>

      <Rating
        onClick={handleRating}
        allowFraction
        transition
        showTooltip={false}
        readonly={!user}
        titleSeparator=""
        initialValue={+(props.rating / 10).toFixed(1)}
      />
      <span className="integer__value">{rating}</span>

    </StyledRating>
  );
};

export default BookRating;
