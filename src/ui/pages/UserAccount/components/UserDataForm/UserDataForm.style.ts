import styled from 'styled-components';

const StyledUserForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  .confirm-button {
    margin-top: 30px;
    padding: 10px 50px;
  }

  .high-block {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
  }

  .high-block h3 {
    font-weight: 500;
    font-size: 20px;
    color: #0D1821;
  }

  .high-block button {
    font-weight: 500;
    font-size: 14px;
    color: #8D9F4F;
    background: #FFFFFF;
    text-decoration: underline;
    
    &:hover {
      color: goldenrod;
    }
  }

  .input-change__name {
    margin-bottom: 30px;
  }

  @media (max-width: 834px) {

    .high-block h3 {
      font-size: 16px;
    }
    
    .high-block button {
      font-size: 12px;
    }
  }
`;

export default StyledUserForm;
