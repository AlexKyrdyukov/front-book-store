import React from 'react';
import CommentItem from '../CommentItem';
import CommentCreate from '../CommentCreate/CommentCreate';
import StyledCommentsBook from './CommentsBook.style';

type PropsType = {
  bookComments: string;
};

const CommentsBook: React.FC<PropsType> = (props) => {
  return (
    <StyledCommentsBook>
      <CommentItem />
      <CommentCreate />
    </StyledCommentsBook>
  );
};

export default CommentsBook;
