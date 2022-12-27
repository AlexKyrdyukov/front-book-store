import React from 'react';

import { StyledButton } from './Button.style';

type PropType = {
  text?: string;
  type?: 'button' | 'submit';
  isMobile?: boolean;
  disabled?: boolean;
  isLogin?: boolean;
  isHeader?: boolean;
  left?: boolean;
  right?: boolean;
};

const Button: React.FC<PropType> = (props) => {
  return (
    <StyledButton
      left={props.left}
      right={props.right}
      disabled={props.disabled}
      isMobile={props.isMobile}
      type={props.type}
      isHeader={props.isHeader}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;
