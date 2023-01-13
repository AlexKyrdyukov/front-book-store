import React from 'react';

import BookPage from '../../../components/BookPage';

import { useAppSelector } from '../../../../../store';

import StyledRecommendation from './Recommendation.style';

const Recommendation: React.FC = () => {
  const recommmendation = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);
  return (
    <StyledRecommendation>
      {recommmendation.map((item) => <BookPage key={item.id} book={item} />)}
    </StyledRecommendation>
  );
};

export default Recommendation;
