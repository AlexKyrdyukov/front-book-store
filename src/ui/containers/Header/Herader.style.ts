import styled from 'styled-components';

type StyleType = {
  user: boolean;
};

const StyledHeader = styled.header<StyleType>`
  max-width: 1440px;
  display: flex;
  align-items: center;
  margin: 0px auto;
  padding: 24px 80px;

  .logo {
    width: 100%;
    height: 100%;
  }

  .circle__button {
    width: 48px;
    height: 48px;
  }

  .block__logo {
    max-height: 46px;
    max-width: 88px;
    margin-right: 128px;
  }

  .block__button {
    display: flex;
    flex-wrap: nowrap;
  }
  
  .block__button :first-child button {
    margin-right: 10px;
  }

  .block__button button {
    font-size: 16px;
    font-weight: 500;
  }

  .header__form-block {
    margin-right: ${(props) => (!props.user ? '97px' : '127px')};
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
    position: relative;
  }

  .button__likes-books {
    margin-right: 27px;
    position: relative;
  }

  .sign-in__button {
    padding: 10px 20px;
  }

  .header__count-books {
    width: 20px;
    height: 20px;
    border-radius: 30px;
    background: #BFCC94;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -5px;
    top: -5px;

    & span {
      color: #344966;
    }
  }

  @media (max-width: 1028px)  {
    padding: 20px 40px;
    
    .header__form-block {
      margin-right: 65px;
    }

  }

  @media (max-width: 834px)  {
    padding: 20px 15px;
      
    .block__logo {
      margin-right: 51px;
    }
    
    .header__form-block {
      margin-right: 51px;
    }

  }

  @media (max-width: 655px)  {
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 17px;
    flex-grow: 1;

    .block__logo {
      margin-right: 31px;
    }

    .header__form-block {
      margin-right: 0px;
    }
    .header__link-catalog{
      margin-right: 90px;
    }
    .header__form-block {
      order: 1;
    }
    
    .block__button {
      justify-content: space-between;
      flex-grow: 1;
    }
    
    .block__button :first-child button {
      margin-right: 10px;
    }
  }
  @media (max-width: 553px)  {

    .circle__button {
      width: 32px;
      height: 32px;
    }
    
    .block__button {
      flex-grow: 0;
    }

    .header__link-catalog{
      margin-right: ${(props) => (props.user ? '47px' : '17px')};
      font-weight: 500;
      font-size: 14px;
    }

    .block__button button {
      font-size: 12px;
      font-weight: 500;
    }

    .logo {
    width: 100%;
    height: 100%;
    }

    .block__logo {
      max-height: 31px;
      max-width: 62px;
      margin-right: 17px;
    }

    .button__cart {
      margin-right: 17px;
    }

    .button__likes-books {
      margin-right: 17px;
    }
  }

  @media (max-width: 355px)  {
    
    .block__button :first-child button {
      margin-right: 5px;
    }

    .block__logo {
      margin-right: 10px;
    }


    .header__link-catalog{
      margin-right: 10px;
    }
    
    .sign-in__button {
      padding: 10px 15px;
    }
    
  }
`;

export default StyledHeader;
