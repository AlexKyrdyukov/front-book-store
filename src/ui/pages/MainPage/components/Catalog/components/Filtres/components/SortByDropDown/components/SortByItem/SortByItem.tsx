import React from 'react';
import classNames from 'classnames';
import StyledSortByItem from './SortByItem.style';

type PropsType = {
  text: string;
  state: boolean;
  handleSortBy: (text: string) => void;
};

const SortByItem: React.FC<PropsType> = (props) => {
  const sortByText = classNames('sort-by__text', {
    active: props.state,
  });

  return (
    <StyledSortByItem
      onClick={() => props.handleSortBy(props.text)}
    >
      <div className={sortByText}>{props.text}</div>
    </StyledSortByItem>
  );
};

export default SortByItem;
