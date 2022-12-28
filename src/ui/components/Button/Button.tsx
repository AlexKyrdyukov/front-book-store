import React from 'react';

import StyledButton from './Button.style';

type PropType = {
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
} & React.PropsWithChildren;

const Button: React.FC<PropType> = (props) => {
  return (
    <StyledButton
      disabled={props.disabled}
      type={props.type}
      className={props.className}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
