import React from 'react';
import StyledLoader from './Preloader.style';

const Preloader: React.FC = () => {
  return (
    <StyledLoader>
      <div className="preloader">
        <div className="preloader__row">
          <div className="preloader__item" />
          <div className="preloader__item" />
        </div>
      </div>
    </StyledLoader>
  );
};

export default Preloader;
