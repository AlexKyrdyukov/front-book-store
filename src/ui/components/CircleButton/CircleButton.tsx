import React from 'react';

import StyledCircleButton from './CircleButton.style';

type PropsType = {
  type?: 'button' | 'submit' | undefined;
  src?: string;
  alt?: string;
  className: string;
} & React.PropsWithChildren;

const CircleButton: React.FC<PropsType> = (props) => {
  return (
    <StyledCircleButton
      type={props.type}
      className={props.className}
    >
      <div className="image__block">
        <img className="image" src={props.src} alt={props.alt} />
      </div>
    </StyledCircleButton>
  );
};

export default CircleButton;
