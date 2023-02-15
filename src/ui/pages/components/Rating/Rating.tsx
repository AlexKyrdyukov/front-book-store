import React from 'react';
import { Rating } from 'react-simple-star-rating';

import { useAppSelector } from '../../../../store';

import StyledRating from './Rating.style';

type PropType = {
  rating: number;
  bookId: number;
  handleRatingBook: (
    bookId: number,
    newRating: number,
    userId: number) => Promise<ResponseType>;
};

type ResponseType = {
  rating: number;
  bookId: number;
};

const BookRating: React.FC<PropType> = (props) => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const [rating, setRating] = React.useState((props.rating / 10).toFixed(1));

  const handleRating = async (rate: number) => {
    try {
      if (user) {
        const response = await props.handleRatingBook(props.bookId, rate, user.userId);
        setRating(String(response.rating));
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
