import React from 'react';
import { useSearchParams } from 'react-router-dom';

import left_arrow from './images/left_arrow.svg';
import right_arrow from './images/right_arrow.svg';
import white_circle from './images/white_circle.svg';
import black_circle from './images/black_circle.svg';

import StyledPagination from './Pagination.style';

type PropsType = {
  countBooks: number;
};

const Pagination: React.FC<PropsType> = (props) => {
  const [currentPage, setCurrentPage] = React.useState<number[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const numberPage = props.countBooks / (+(searchParams.get('perPage') as string) || 12);
    const arr = [...new Array(Math.ceil(numberPage))].map((item, index) => index + 1);
    setCurrentPage(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.countBooks]);

  const handleSpecificPage = (page?: number) => {
    if (page) {
      searchParams.set('page', String(page));
      setSearchParams(searchParams);
    }
  };

  return (
    <StyledPagination>
      <div
        className="pagination__button-block"
      >
        <button
          className="pagination__button-last"
          onClick={() => handleSpecificPage(+(searchParams.get('page') as string) - 1)}
          disabled={+(searchParams.get('page') as string) <= 1}
        >
          <img src={left_arrow} alt="arrow" />
        </button>
        {currentPage.map((item) => (
          <button
            className="pagination__button-circle"
            key={item}
            onClick={() => handleSpecificPage(item)}
            disabled={item === +(searchParams.get('page') as string)}
          >
            <img src={+(searchParams.get('page') as string) === item ? black_circle : white_circle} alt="circle" />
          </button>
        ))
        }

        <button
          className="pagination__button-next"
          onClick={() => handleSpecificPage(+(searchParams.get('page') as string) + 1)}
          disabled={+(searchParams.get('page') as string) >= currentPage.length}
        >
          <img src={right_arrow} alt="arrow" />
        </button>
      </div>
    </StyledPagination >
  );
};

export default Pagination;
