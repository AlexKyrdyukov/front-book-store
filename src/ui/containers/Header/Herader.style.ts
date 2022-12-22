import styled from 'styled-components';

export const StyledHeader = styled.header`
  max-width: 1280px;
  display: flex;
  align-items: center;
  /* margin: 24px auto 0 auto; */
  margin: 0px auto;
  margin-top: 24px;
  padding: 0 15px;

.header__logo {
  max-height: 46px;
  max-width: 88px;
  margin-right: 125px;
}

.header__input {
  display: flex;
  margin-right: 97px;
  width: 630px;
} 


.header__link-catalog {
  font-weight: 500;
  margin-right: 43px;
  font-size: 16px;
  color: #000000;
}

@media (max-width: 1440px)  { 
  max-width: 834px;

  .header__logo {
    margin-right: 50px;
  }

  .header__link-catalog {
    margin-right: 73px;
  }

  .header__input {
    width: 247px;
    margin-right: 51px;
  }
 
}

@media (max-width: 834px)  { 
  margin: 33px auto 0 auto;
  max-width: 320px;
  flex-wrap: wrap;
  row-gap: 17px;

  .header__logo {
    max-height: 31px;
    max-width: 62px;
    margin-right: 20px;
  }

  .header__link-catalog {
    font-size: 14px;
    margin-right: 20px;
  }

  .header__input {
    width: 290px;
    margin-right: 0px;
  }

}
`;
