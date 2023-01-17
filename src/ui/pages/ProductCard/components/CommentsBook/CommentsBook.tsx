import React from 'react';

import StyledCommentsBook from './CommentsBook.style';

type PropsType = {
  comments?: string;
};

const CommentsBook: React.FC<PropsType> = (props) => {
  return (
    <StyledCommentsBook>
      CommentsBook
    </StyledCommentsBook>
  );
};

export default CommentsBook;
