import styled from 'styled-components';

type StyleType = {
  isHeader?: boolean;
};

const StyledInput = styled.div<StyleType>`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  border-radius: 16px;
  background: #F0F4EF;

  .custom__placeholder{
    position: absolute;
    display: none;
    white-space: nowrap;
  }

  .input__text {
    position: absolute;
    white-space: nowrap;
    top: 75px;
    font-size: 14px;
    color: #344966;
  }

  .block__style { 
    display: flex;
    align-items: center;
    background: #F0F4EF;
  }

  .error__text {
    color: #C30052;
  }

  .image__block {
    margin-left: 26px;
    margin-right: 16px;
    max-width: ${(props) => (props.isHeader ? '19px' : '25px')};
    max-height: ${(props) => (props.isHeader ? '19px' : '20px')};
  }

  .image {
    width: 100%;
    height: 100%;
  }


  .input {
    padding: 22px 0;
    background: #F0F4EF;
    margin-right: 20px;
    width: 100%;
  }

  .input::placeholder {
    font-size: 16px;
    color: #B9BAC4;
  }

 

  @media (max-width: 1440px)  { 

    .input:focus {
      padding-bottom: 5px;
      padding-top: 39px ;
    }

    .input:focus + .custom__placeholder {
      font-size: 16px;
      display: inline;
      left: 65px;
      top: 7px;
      color: #B9BAC4;
    }
  }

  @media (max-width: 834px)  { 
    /* order: ${(props) => (props.isHeader ? 1 : 0)}; */
    /* order: 1; */

    .input {
      padding: 14px 0;
    }

    .input__text {
      font-size: 14px;
      top: 55px;
    }

    .input:focus {
      padding-bottom: 3px;
      padding-top: 25px ;
    }

    .input:focus + .custom__placeholder {
      font-size: 16px;
      display: inline;
      left: 65px;
      top: 3px;
      color: #B9BAC4;
    }
  }
`;

export default StyledInput;
