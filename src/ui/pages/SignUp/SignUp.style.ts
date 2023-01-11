import styled from 'styled-components';

const StyledSignUpPage = styled.main`
  margin: 0px auto;
  max-width: 1440px;
  margin-bottom: 80px;
  display: flex;
  padding: 0 80px;
  padding-top: 70px;
  
  .button {
    padding: 10px 50px;
    color: #F0F4EF;
    font-weight: 500;
    font-size: 16px;
  }

  .title {
    font-size: 32px;
  }

  .block__form {
    display: flex;
    flex-direction: column;
    row-gap:63px;
    flex-grow: 1;
    margin-right: 255px;
  }

  .block__image {
    max-width: 612px;
    max-height: 522px;
  }

  .image__human {
    width: 100%;
    height: 100%;
  }

  .block__button{
    margin-top: 30px;
  }

  @media (max-width: 1400px)  { 
  
    .block__form {
    margin-right: 100px;
    }
  }

  @media (max-width: 1028px)  { 
    padding: 0px 40px;
    padding-top: 70px;


    .block__form {
      margin-right: 50px;
    }
  }

  @media (max-width: 834px)  { 
    max-width: 834px;
    padding: 0px 15px;
    margin-bottom: 104px;
    padding-top: 70px;

    .block__form {
      margin-right: 20px;
    }
    
    .block__image {
      max-width: 390px;
      max-height: 333px;
      align-self: center;
    }

    .image__human {
      width: 100%;
      height: 100%;
    }

    .title {
      margin-bottom: -13px;
    }
  }

  @media (max-width: 651px)  { 
    margin-bottom: 70px;
    flex-direction: column;
    
    .block__image {
      align-self: center;
    }

    .block__form {
      margin-right: 0px;
      margin-bottom: 60px;
    }
  }

  @media (max-width: 350px)  { 
      
    .block__image {
      max-width: 290px;
      max-height: 247px;
      margin-top: 50px;
    }
  }
`;

export default StyledSignUpPage;
