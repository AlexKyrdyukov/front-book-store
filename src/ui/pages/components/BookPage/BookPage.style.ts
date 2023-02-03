import styled from 'styled-components';

const StyledBookPage = styled.div`
  max-width: 305px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 80px;

  .darling__button {
    width: 48px;
    height: 48px;
    opacity: 0.9;
  }

  .book__name {
    color: #344966;
    font-weight: 500;
    font-size: 20px;
    margin-top: 30px;
    white-space: nowrap;
    overflow: hidden;
  }

  .book__author {
    margin-top: 5px;
    font-weight: 500;
    font-size: 20px;
    color: #B9BAC4;
    margin-bottom: 20px;
    white-space: nowrap;
    overflow: hidden;
  }

  .image__block {
    max-width: 305px;
    position: relative;
    border-radius: 16px;
  }

  .image__block img {
    width: 100%;
    height: 100%;
  }

  .block__circle-button {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .annotation-new__block {
    position: absolute;
    left: 20px;
    bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    background: #BFCC94;
    border-radius: 16px;
    color: #0D1821;
    padding-top: 10px;
    padding-bottom:10px;
  }

  .annotation-bestseller__block {
    background: #344966;
    color: #F0F4EF;
  }

  .buy__button {
    background: #344966;
  }

  .disabled {
    background: #B9BAC4;
  }
`;

export default StyledBookPage;
