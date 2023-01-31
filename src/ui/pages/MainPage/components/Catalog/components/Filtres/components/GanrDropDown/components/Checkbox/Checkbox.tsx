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
  const handleClick = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      // eslint-disable-next-line no-console
      console.log('event', props.value);
      searchParams.set('genre', props.value);

      setSearchParams(searchParams);
    }
  };

  return (
    <StyledCheckbox
      onClick={handleClick}
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
