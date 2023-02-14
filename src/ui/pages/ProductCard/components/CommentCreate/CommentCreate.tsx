import React from 'react';

import StyledCreateComment from './CommentCreate.style';

type PropsType = {
onCommentCreate: (text: string) => Promise<void>;
};

const CommentCreate: React.FC<PropsType> = (props) => {
  const [textState, setTextState] = React.useState<string>('');

  const textHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextState(e.target.value);
  };
  return (
    <StyledCreateComment>
      <form>
        <textarea
          onChange={textHandler}
          className="create-comment__textarea"
          placeholder="Share comment"
        />
        <button
          type="button"
          disabled={!textState.length}
          onClick={() => props.onCommentCreate(textState)}
          className="create-comment__button"
        >POST A COMMENT
        </button>
      </form>
    </StyledCreateComment>
  );
};

export default CommentCreate;
