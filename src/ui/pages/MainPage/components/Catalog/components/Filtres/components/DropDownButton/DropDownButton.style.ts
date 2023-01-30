import styled from 'styled-components';

const StyledDropDownButton = styled.div`
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  width: 196px;
  background: #F0F4EF;
  border-radius: 16px;
  justify-content: space-between;
  
  .drop-down__title-text {
    padding-left: 15px;
    font-size: 18px;
    font-weight: 500;
    color: #344966;
  }

  .drop-down__block {
    z-index: 4;
    position: absolute;
    top: 100px;
    width: 305px;
  }

  .drop-down__image {
    padding-right: 10px;
  }
`;

export default StyledDropDownButton;
