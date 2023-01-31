import React, { useEffect } from 'react';
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
  const divElement = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (ev: MouseEvent): void => {
    if (divElement.current && !divElement.current.contains(ev.target as Node)) {
      setButtonState(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledDropDownButton
      ref={divElement}
    >
      <div
        className="drop-down__block"
        onClick={() => setButtonState(!buttonState)}
      >
        <h6
          className="drop-down__title-text"
        >{props.title}
        </h6>
        <img className="drop-down__image" src={buttonState ? open : close} alt="open button" />
      </div>
      {buttonState
        ? <div className="drop-down__container">{props.component}</div>
        : null}
    </StyledDropDownButton>
  );
};

export default DropDownButton;
