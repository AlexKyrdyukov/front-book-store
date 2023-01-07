import styled from 'styled-components';

const StyledUserAccount = styled.main`
  padding-top: 40px;
  max-width: 1055px;
  padding-left: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 104px;
  
  .user__avatar-block {
    margin-right: 20px;
  }

  .change-data-block {
    display: flex;
    flex-direction: column;
    max-width: 520px;
    flex-grow: 1;
  }

  @media (max-width: 1028px) {
    padding-left: 40px;
    padding-right: 15px;
  }

  @media (max-width: 834px) {
    padding-left: 15px ;
  }

  @media (max-width: 655px) {
    flex-direction: column;
    align-items: center;

    .user__avatar-block {
      margin-right: 0px;
    }
  }
`;

export default StyledUserAccount;
