import React from 'react';

import { StyledCircleButton } from './CircleButton.style';

type PropsType = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  isMobile?: boolean;
  isLogin?: boolean;
  src?: string;
  alt?: string;
};

const CircleButton: React.FC<PropsType> = (props) => {
  return (
    <StyledCircleButton
      isMobile={props.isMobile}
      type={props.type}
    >
      <div className="image__block">
        <img className="image" src={props.src} alt={props.alt} />
      </div>
    </StyledCircleButton>
  );
};

export default CircleButton;
