import styled from 'styled-components';

type StyleType = {
  label?: string;
};

const StyledInput = styled.div<StyleType>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: #F0F4EF;

  &.input__error {
    outline: 3px solid #ED2E7E;
    opacity: 0.5;
  }

  .hint__text {
    font-weight: 500;
    font-size: 14px;
    color: #344966;
    position: absolute;
    bottom: -20px;
  }

  .error__text {
    color: #C30052;
  }

  .image__block {
    margin-left: 26px;
    margin-right: 16px;
  }

  .image {
    width: 25px;
    height: 20px;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #F0F4EF inset;
  }

  .input {
    padding-top: ${(props) => (props.label ? '34px' : '20px')} ;
    padding-bottom: ${(props) => (props.label ? '6px' : '20px')} ;
    background: #F0F4EF;
    margin-right: 20px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    color: #344966;
  }

  .input::placeholder {
    font-size: 16px;
    color: #344966;
  }

  .label__input {
    color: #344966;
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    position: absolute;
    top: 10px;
    left: 70px;
    display: block;
  }

  @media (max-width: 834px)  {

    .input__text {
      font-size: 14px;
      top: 55px;
    }
  }

  @media (max-width: 553px) {

    .input::placeholder {
      font-size: 16px;
    }

    .input {
      padding-top: ${(props) => (props.label ? '30px' : '12px')} ;
      padding-bottom: ${(props) => (props.label ? '2px' : '12px')} ;
    }
  }
`;

export default StyledInput;
