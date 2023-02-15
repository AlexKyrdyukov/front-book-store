import styled from 'styled-components';

const StyledDropDownButton = styled.div`
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  position: relative;
  width: 196px;
  background: #F0F4EF;
  border-radius: 16px;
  justify-content: space-between;
  
  .drop-down__title-text {
    padding-left: 15px;
    font-size: 18px;
    font-weight: 500;
    color: #344966;
    white-space: nowrap;
    overflow: hidden;
  }

  .drop-down__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .drop-down__container {
    z-index: 4;
    position: absolute;
    top: 70px;
  }

  .drop-down__image {
    padding-right: 10px;
  }
`;

export default StyledDropDownButton;
