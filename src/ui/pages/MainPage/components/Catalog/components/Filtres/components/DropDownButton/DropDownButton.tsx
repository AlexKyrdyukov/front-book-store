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
      onBlur={() => setButtonState(!buttonState)}
    >
      <h6 className="drop-down__title-text">{props.title}</h6>
      <img className="drop-down__image" src={buttonState ? open : close} alt="open button" />
      <div className="drop-down__block">{buttonState ? props.component : null}</div>
    </StyledDropDownButton>
  );
};

export default DropDownButton;
