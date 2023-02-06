import React from 'react';

import star from './images/star.svg';

import StyledRaiting from './Raiting.style';

type PropType = {
  raiting: number;
};

const Raiting: React.FC<PropType> = (props) => {
  return (
    <StyledRaiting>
      <span className="star"><img src={star} alt="star" /></span>
      <span className="star"><img src={star} alt="star" /></span>
      <span className="star"><img src={star} alt="star" /></span>
      <span className="star"><img src={star} alt="star" /></span>
      <span className="star"><img src={star} alt="star" /></span>
      <span className="integer__value">{(props.raiting / 10).toFixed(1)}</span>
    </StyledRaiting>
  );
};

export default Raiting;
