import React from 'react';
import type { CommentsType } from '../../../../../store/slices/bookSlice';
import userAvatar from './images/user_avatar.svg';
import StyledCommentItem from './CommentItem.style';

type PropsType = {
  comment: CommentsType;
};

const CommentItem: React.FC<PropsType> = (props) => {
  const comment = props.comment;

  const avatar = comment.user.avatar?.slice(-4) === 'null' ? userAvatar : comment.user.avatar as string;
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
      <p
        className="comment-item__user-full-name"
      >{comment.user.fullName || 'User'}
      </p>
      <p
        className="comment-item__data"
      >{comment.createdDate}
      </p>
      <p
        className="comment-item__text"
      >{comment.commentText}
      </p>
    </StyledCommentItem>
  );
};

export default CommentItem;
