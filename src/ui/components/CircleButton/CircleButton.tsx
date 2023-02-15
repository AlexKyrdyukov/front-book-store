import React from 'react';

import StyledCircleButton from './CircleButton.style';

type PropsType = {
  disabled?: boolean;
  type?: 'button' | 'submit' | undefined;
  src?: string;
  alt?: string;
  className: string;
  onClick?: () => void;
} & React.PropsWithChildren;

const CircleButton: React.FC<PropsType> = ({ src, alt, ...props }) => {
  return (
    <StyledCircleButton
      {...props}
    >
      <div
        className="image__block"
      >
        <img
          className="image"
          src={src}
          alt={alt}
        />
      </div>
    </StyledCircleButton>
  );
};

export default CircleButton;
