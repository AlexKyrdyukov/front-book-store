import React from 'react';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

import close from '../../../DropDownButton/image/close.svg';
import open from '../../../DropDownButton/image/open.svg';

import StyledSortDirection from './SortDirection.style';

type PropsType = {
  text: string;
};

const SortDirection: React.FC<PropsType> = (props) => {
  const [windowState, setWindowState] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlerSortDirection = (value: string) => {
    if (searchParams.get('sortDirection') !== value) {
      searchParams.set('sortDirection', value);
      setSearchParams(searchParams);
    }
    return value;
  };

  const sortDirectionItemFirstChild = classNames('sort-direction__item', {
    active: (searchParams.get('sortDirection') as string) === 'ASC',
  });

  const sortDirectionItemLastChild = classNames('sort-direction__item', {
    active: (searchParams.get('sortDirection') as string) === 'DESC',
  });
  return (
    <StyledSortDirection
    >
      <div
      className="sort-direction__title-image__block"
        onClick={() => setWindowState(!windowState)}
      >

        {props.text}
        <img
          className="sort-direction__image"
          src={windowState ? open : close} alt="arrow"
        />
      </div>
      {windowState &&
        (<div className="sort-direction__items-block">
          <span
            onClick={() => handlerSortDirection('ASC')}
            className={sortDirectionItemFirstChild}
          >ascending
          </span>
          <span
            onClick={() => handlerSortDirection('DESC')}
            className={sortDirectionItemLastChild}
          >
            descending
          </span>
         </div>)}
    </StyledSortDirection>
  );
};

export default SortDirection;
