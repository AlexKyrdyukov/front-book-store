import React from 'react';
import { useSearchParams } from 'react-router-dom';

import checked from './images/checked.svg';
import unchecked from './images/unchecked.svg';

import StyledCheckbox from './Checkbox.style';

type PropsType = {
  value: string;
};

const Checkbox: React.FC<PropsType> = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.set('bigDick', 'dick');
  setSearchParams(searchParams);
  searchParams.set('genres', props.value);
  // eslint-disable-next-line no-console
  console.log(searchParams.get('genres'));
  return (
    <StyledCheckbox
      onClick={() => setIsChecked(!isChecked)}
    >
      <img
        className="checkbox__image"
        src={isChecked ? checked : unchecked} alt="checkbox"
      />
      <span
        className="checkbox__text"
      >{props.value}
      </span>

    </StyledCheckbox>
  );
};

export default Checkbox;
