import React from 'react';

import { StyledButton } from './Button.style';

type PropType = {
  text?: string;
};

const Button: React.FC<PropType> = (props) => {
  return (
    <StyledButton>
      {props.text}
    </StyledButton>
  );
};

export default Button;
