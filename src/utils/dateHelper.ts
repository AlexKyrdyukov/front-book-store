import DAYjs from 'dayjs';

const SEC = 1000;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = MONTH * 12;

const getCreatedCommentDate = (createdDate: string) => {
  const diffTime = DAYjs().diff(DAYjs(createdDate));

  if (diffTime < SEC) {
    return '1s';
  }
  if (diffTime > SEC && diffTime < MIN) {
    return `${Math.round(diffTime / SEC)} s ago`;
  }
  if (diffTime > MIN && diffTime < HOUR) {
    return `${Math.round(diffTime / MIN)} min ago`;
  }
  if (diffTime > HOUR && diffTime < DAY) {
    return `${Math.round(diffTime / HOUR)} hours ago`;
  }
  if (diffTime > DAY && diffTime < MONTH) {
    return `${Math.round(diffTime / DAY)} days ago`;
  }
  if (diffTime > MONTH && diffTime < YEAR) {
    return `${Math.round(diffTime / MONTH)} month ago`;
  }
  return `${Math.round(diffTime / YEAR)} year ago`;
};

export default getCreatedCommentDate;
