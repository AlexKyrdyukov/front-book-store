import React from 'react';

import checked from './images/checked.svg';
import unchecked from './images/unchecked.svg';

import StyledCheckbox from './Checkbox.style';

type PropsType = {
  value: string;
  id: number;
  state: boolean;
  onClickHandler: (value: string) => void;
};

const Checkbox: React.FC<PropsType> = (props) => {
  return (
    <StyledCheckbox
      onClick={() => props.onClickHandler(String(props.id))}
    >
      <img
        className="checkbox__image"
        src={props.state ? checked : unchecked} alt="checkbox"
      />
      <span
        className="checkbox__text"
      >{props.value}
      </span>

    </StyledCheckbox>
  );
};

export default Checkbox;
