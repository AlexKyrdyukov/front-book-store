import React from 'react';
import type { CommentsType } from '../../../../../store/slices/bookSlice';

import CommentDate from '../CommentDate';

import userAvatar from './images/user_avatar.svg';

import StyledCommentItem from './CommentItem.style';

type PropsType = {
  comment: CommentsType;
};

const CommentItem: React.FC<PropsType> = (props) => {
  const { comment } = props;

  const avatar = comment.user.avatar ? comment.user.avatar as string : userAvatar;
  if (!comment) {
    return null;
  }

  return (
    <StyledCommentItem>
      <div className="comment-item__img-block">
        <img
          className="comment-item__img"
          src={avatar} alt="user avatar"
        />
      </div>
      <div>
        <p
          className="comment-item__user-full-name"
        >{comment.user.fullName || 'User'}
        </p>
        <CommentDate
          createdDate={comment.createdDate}
        />
        <p
          className="comment-item__text"
        >{comment.commentText}
        </p>
      </div>
    </StyledCommentItem>
  );
};

export default CommentItem;
