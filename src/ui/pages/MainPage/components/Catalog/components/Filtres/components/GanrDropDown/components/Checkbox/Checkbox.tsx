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
    const arrayGenres: string[] = [];
    const genresAll = searchParams.getAll('genres');
    const genresGet = searchParams.get('genres');
    // eslint-disable-next-line no-console
    console.log(genresAll, genresGet);
    if (arrayGenres.length) {
      searchParams.delete('genres');
      setSearchParams(searchParams);
    }

    // eslint-disable-next-line no-console
    searchParams.forEach((value, key, parent) => console.log(value, key, parent.get('genre')));
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
