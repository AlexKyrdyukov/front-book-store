import styled from 'styled-components';

const StyledCommentItem = styled.div`
  margin-bottom: 30px;
  max-width: 700px;
  border-radius: 16px;
  background: #F0F4EF;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;

  .comment-item__img-block {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .comment-item__img {
    width: 60px;
    height: 60px;
    border-radius: 36px;
  }

  .comment-item__user-full-name {
    font-weight: 600;
    font-size: 16px;
    color: #0D1821;
    margin-bottom: 10px;
  }

  .comment-item__data {
    font-weight: 500;
    font-size: 12px;
    color: #B9BAC4;
    margin-bottom: 10px;
  }

  .comment-item__text {
    font-weight: 500;
    font-size: 16px;
    color: #344966;
  }

`;

export default StyledCommentItem;
