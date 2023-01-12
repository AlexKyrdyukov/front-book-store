import React from 'react';

import checked from './images/checked.svg';
import unchecked from './images/unchecked.svg';

import StyledCheckbox from './Checkbox.style';

type PropsType = {
  id: number;
  handleCheckChildElement?(event: React.FormEvent<HTMLInputElement>): void;
  isChecked?: boolean;
  value?: string;
  label?: string;
};

const Checkbox: React.FC<PropsType> = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <StyledCheckbox>
      <img src={props.isChecked ? checked : unchecked} alt="" />
      <input
        key={props.id}
        onClick={props.handleCheckChildElement}
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
        checked={props.isChecked}
        value={props.value}
      />
      <label htmlFor={props.value}>{props.label}</label>

    </StyledCheckbox>
  );
};

export default Checkbox;
