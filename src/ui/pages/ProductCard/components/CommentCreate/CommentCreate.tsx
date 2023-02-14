import React from 'react';

import StyledCreateComment from './CommentCreate.style';

const CommentCreate: React.FC = () => (
  <StyledCreateComment>
    <form action="" method="post">
      <textarea
        className="create-comment__textarea"
        placeholder="Share comment"
       />
      <button className="create-comment__button">POST A COMMENT</button>
    </form>
  </StyledCreateComment>
);

export default CommentCreate;
