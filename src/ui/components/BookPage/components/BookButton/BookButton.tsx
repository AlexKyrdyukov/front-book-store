import React from 'react';

import StyledButton from './BookButton.style';

type PropType = {
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
} & React.PropsWithChildren;

const BookButton: React.FC<PropType> = ({ children, ...props }) => {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default BookButton;
