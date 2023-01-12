import React from 'react';

import StyledRaiting from './Raiting.style';

const Raiting: React.FC = () => {
  return (
    <StyledRaiting>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>

    </StyledRaiting>
  );
};

export default Raiting;
