import styled from 'styled-components';

const StyledPassword = styled.div`
  display: flex;
  flex-direction: column;
  
  .confirm-button {
    padding: 10px 50px;
    margin-right: 40px;
  }

  .delete-button {
    padding: 10px 50px;
  }

  .block__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .block__title h3 {
    font-weight: 500;
    font-size: 20px;
    color: #0D1821;
  }
  
  .input__margin {
    margin-bottom: 30px;
  }

  .block__title button {
    font-weight: 500;
    font-size: 14px;
    color: #8D9F4F;
    background: #FFFFFF;
    text-decoration: underline;
    
    &:hover {
      color: goldenrod;
    }
  }

  @media (max-width: 834px) {

    .block__title h3 {
      font-size: 16px;
    }
    
    .block-title button {
      font-size: 12px;
    }
  }

  @media (max-width: 655px) {

    .block__title h3 {
      font-size: 14px;
    }

  .confirm-button {
    margin-top: 10px;
  }
  }

  @media (max-width: 410px) {

    .confirm-button {
      margin-bottom: 30px;
    }
  }
`;

export default StyledPassword;
