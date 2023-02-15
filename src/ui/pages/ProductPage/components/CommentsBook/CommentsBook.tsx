import React from 'react';

import type { CommentsType } from '../../../../../store/slices/bookSlice';

import CommentItem from '../CommentItem';

import StyledCommentsBook from './CommentsBook.style';

type PropsType = {
  bookComments?: CommentsType[];
};

const CommentsBook: React.FC<PropsType> = (props) => {
  return (
    <StyledCommentsBook>
      {props?.bookComments?.map((item) => (
        <CommentItem key={item.createdDate} comment={item} />
      ))}
    </StyledCommentsBook>
  );
};

export default CommentsBook;
