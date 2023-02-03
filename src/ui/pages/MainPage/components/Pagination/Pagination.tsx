import React from 'react';
import { useSearchParams } from 'react-router-dom';

import left_arrow from './images/left_arrow.svg';
import right_arrow from './images/right_arrow.svg';
import white_circle from './images/white_circle.svg';
import black_circle from './images/black_circle.svg';

import StyledPagination from './Pagination.style';

const Pagination: React.FC = () => {
  const [searcParams, setSearchParams] = useSearchParams();
  // must compare the page from the front with the page number that came from the back
  const page = +(searcParams.get('page') as string);

  return (
    <StyledPagination>
      <div
        className="pagination__button-block"
      >
        <button>
          <img src={left_arrow} alt="arrow" />
        </button>
        <button>
          <img src={page/* === page with back */ ? white_circle : black_circle} alt="circle" />
        </button>
        <button>
          <img src={page ? black_circle : white_circle} alt="circle" />
        </button>
        <button>
          <img src={page ? white_circle : black_circle} alt="circle" />
        </button>
        <button><img src={right_arrow} alt="arrow" />
        </button>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
