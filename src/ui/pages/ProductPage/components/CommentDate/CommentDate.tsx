import React from 'react';
import dayjs from 'dayjs';

import StyledCommentDate from './CommentDate.style';

type PropsType = {
  createdDate: string;
};

const CommentDate: React.FC<PropsType> = (props) => {
  const [dateString, setDateString] = React.useState<string>('now');

  const data = (data: number) => {
    const sec = 1000;
    const min = 1000 * 60;
    const hour = min * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;

    if (data < sec) {
      return '1s';
    }
    if (data > sec && data < min) {
      return `${Math.round(data / sec)} s ago`;
    }
    if (data > min && data < hour) {
      return `${Math.round(data / min)} min ago`;
    }
    if (data > hour && data < day) {
      return `${Math.round(data / hour)} hours ago`;
    }
    if (data > day && data < month) {
      return `${Math.round(data / day)} days ago`;
    }
    if (data > month && data < year) {
      return `${Math.round(data / month)} month ago`;
    }
    return `${Math.round(data / year)} year ago`;
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setDateString(data(dayjs().diff(dayjs(props.createdDate))));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledCommentDate>
      {dateString}
    </StyledCommentDate>
  );
};

export default CommentDate;
