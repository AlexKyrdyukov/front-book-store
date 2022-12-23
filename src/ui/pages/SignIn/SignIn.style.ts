import styled from 'styled-components';

export const StyledSignInPage = styled.main`
.sign-up__input {
  width: 413px;
}

.input__error {
  outline: 3px solid red;
  opacity: 0.5;
}

.sign-up__wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  margin-top: 90px;
  max-width: 1280px;
  padding: 0 15px;
  margin-bottom: 154px;
}

.title {
  font-size: 32px;
}

.block__form {
  display: flex;
  flex-direction: column;
  row-gap:63px;
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

@media (max-width: 1440px)  { 
  .sign-up__wrapper {
    max-width: 834px;
    margin-bottom: 104px;
  }
  .sign-up__input {
  width: 392px;
  }
 
  .block__image {
  max-width: 390px;
  max-height: 333px;
  margin-top: 50px;
}

.image__human {
  width: 100%;
  height: 100%;
}
.title {
  margin-bottom: -13px;
}
}

@media (max-width: 834px)  { 
  .sign-up__wrapper {
    max-width: 290x;
    flex-direction: column;
    align-items: center;
  margin-top: 30px;

  }

  .block__form {
  row-gap:44px;

  }

  .sign-up__input {
  width: 290px;
  }

  .block__image {
  max-width: 290px;
  max-height: 247px;
  order: 1;
  }

  .image__human {
    width: 100%;
    height: 100%;
  }

  .title {
  font-size: 18px;
}
}
`;
