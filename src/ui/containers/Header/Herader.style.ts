import styled from 'styled-components';

type StyleType = {
  user: boolean;
};

export const StyledHeader = styled.header<StyleType>`
  max-width: 1440px;
  display: flex;
  align-items: center;
  margin: 0px auto;
  padding: 24px 80px;

  .header__logo {
    width: 100%;
    height: 100%;
  }

  .block__image {
    max-height: 46px;
    max-width: 88px;
    margin-right: 128px;
  }

  .header__input {
    margin-right: ${(props) => (!props.user ? '97px' : '127px')};
  } 

    .block__button {
      display: flex;
      flex-wrap: nowrap;
    }
  .block__button :first-child button {
    margin-right: 10px;
  }

  .header__form-block {
    display: flex;
    flex-grow: 1;
  }

  .header__link-catalog {
    font-weight: 500;
    margin-right: 43px;
    font-size: 16px;
    color: #000000;
  }

  .button__cart {
    margin-right: 27px;
  }

  .button__likes-books {
    margin-right: 27px;
  }

  .sign-in__button {
    padding: 10px 20px;
  }

  @media (max-width: 1024px)  { 
    max-width: 834px;
    padding: 20px 15px;


    .block__image {
      max-width: 88px;
      max-height: 46;
      margin-right: 50px;
    }

    .header__logo {
      height: 100%;
      width: 100%;
    }

    .header__link-catalog {
      margin-right: 73px;
    }

    .header__input {
      /* width: 247px; */
      margin-right: 81px;
    }

  }

  @media (max-width: 834px)  { 
    padding: 0 12px;

    margin: 33px auto 0 auto;
    max-width: 320px;
    flex-wrap: wrap;
    row-gap: 17px;

    .header__logo {
      width: 100%;
      height: 100%;
    }

    .block__image {
      max-height: 31px;
      max-width: 62px;
      margin-right: 19px;
    }

    .header__link-catalog {
      font-size: 14px;
      margin-right: 17px;
    }

    .header__input {
      margin-right: 0px;
      order: 1;
    }

    .button__cart {
      margin-right: 18px;
    }

    .button__likes-books {
      margin-right: 18px;
    }
  }

  @media (max-width: 330px)  { 
    padding: 0 5px;

    .block__image {
      margin-right: 16px;

    }
    .header__link-catalog {
      margin-right: 16px;
    }

  }
`;
