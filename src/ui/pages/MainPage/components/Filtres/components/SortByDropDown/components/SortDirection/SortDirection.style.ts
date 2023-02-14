import styled from 'styled-components';

const StyledSortDirection = styled.div`
  font-weight: 500;
  font-size: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 15px;
  color: #344966;
  position: relative;
  
  .sort-direction__image {
    padding-left: 20px;
  }

  .sort-direction__items-block {
    position: absolute;
    top: 80px;
    left: 0px;
    display: flex;
    flex-direction: column;
    background: #F0F4EF;
    padding: 10px;
    border-radius: 16px;
    width: 197px;
  }

  .sort-direction__title-image__block {
    display: flex;
  align-items: center;

  }

  .sort-direction__item {
    padding: 10px;
    color: #B9BAC4;
  }
  
  .active {
    color: #344966;
  }
`;

export default StyledSortDirection;
