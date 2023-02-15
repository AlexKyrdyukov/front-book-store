import React from 'react';

import StyledCreateComment from './CommentCreate.style';

type PropsType = {
  commentHandler: (text: string) => Promise<void>;
};

const CommentCreate: React.FC<PropsType> = (props) => {
  const [textState, setTextState] = React.useState<string>('');

  const textHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextState(e.target.value);
  };
  const createComment = () => {
    props.commentHandler(textState);
    setTextState('');
  };

  return (
    <StyledCreateComment>
      <form
      >
        <textarea
          onChange={textHandler}
          className="create-comment__textarea"
          placeholder="Share comment"
          value={textState}
          />
        <button
          type="button"
          disabled={!textState.length}
          onClick={createComment}
          className="create-comment__button"
        >POST A COMMENT
        </button>
      </form>
    </StyledCreateComment>
  );
};

export default CommentCreate;
