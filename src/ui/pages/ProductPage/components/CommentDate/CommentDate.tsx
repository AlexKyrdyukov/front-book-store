import React from 'react';

import getCreatedCommentDate from '../../../../../utils/dateHelper';

import StyledCommentDate from './CommentDate.style';

type PropsType = {
  createdDate: string;
};

const CommentDate: React.FC<PropsType> = (props) => {
  const [dateString, setDateString] = React.useState<string>('now');

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setDateString(getCreatedCommentDate(props.createdDate));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [props.createdDate]);

  return (
    <StyledCommentDate>
      {dateString}
    </StyledCommentDate>
  );
};

export default CommentDate;
