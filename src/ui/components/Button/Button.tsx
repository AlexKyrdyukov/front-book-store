import React from 'react';

import { StyledButton } from './Button.style';

type PropType = {
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isMobile?: boolean;
};

const Button: React.FC<PropType> = (props) => {
  return (
    <StyledButton
      isMobile={props.isMobile}
      type={props.type}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;
