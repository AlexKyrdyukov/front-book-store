import React from 'react';
import type { JSXElementConstructor } from 'react';

import close from './image/close.svg';
import open from './image/open.svg';

import StyledDropDownButton from './DropDownButton.style';

type PropsType = {
  component: React.ReactElement<unknown | JSXElementConstructor<unknown>>;
  title: string;
};

const DropDownButton: React.FC<PropsType> = (props) => {
  const [buttonState, setButtonState] = React.useState<boolean>(false);
  return (
    <StyledDropDownButton
      onClick={() => setButtonState(!buttonState)}
    >
      {props.title}
      <img src={buttonState ? open : close} alt="open button" />
      {buttonState ? props.component : null}
    </StyledDropDownButton>
  );
};

export default DropDownButton;
