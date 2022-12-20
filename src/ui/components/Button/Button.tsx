import React from 'react';

import { StyledButton } from './Button.style';

type PropType = {
  value?: string;
} & React.PropsWithChildren;

const Button: React.FC<PropType> = (props) => {
  return (
    <StyledButton>
      {props.children}
    </StyledButton>
  );
};

export default Button;
