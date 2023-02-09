import React from 'react';
import { Rating } from 'react-simple-star-rating';

import { useAppSelector } from '../../../../store';

import StyledRaiting from './Raiting.style';

type PropType = {
  raiting: number;
  bookId: number;
  handleRaitingBook: (
    bookId: number,
    newRaiting: number,
    userId: number) => Promise<ResponseType>;
};

type ResponseType = {
  newRaiting: number;
  bookId: number;
};

const Raiting: React.FC<PropType> = (props) => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const [raiting, setRaiting] = React.useState(+(props.raiting / 10).toFixed(1));

  const handleRating = async (rate: number) => {
    try {
      const response = await props.handleRaitingBook(props.bookId, rate, user!.userId);
      setRaiting(response.newRaiting);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledRaiting>
      <Rating
        onClick={handleRating}
        allowFraction
        transition
        showTooltip={false}
        readonly={!user}
        titleSeparator=""
        initialValue={+(props.raiting / 10).toFixed(1)}
      />
      <span className="integer__value">{raiting}</span>
    </StyledRaiting>
  );
};

export default Raiting;
