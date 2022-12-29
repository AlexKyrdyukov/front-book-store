import styled from 'styled-components';

const StyledHighBanner = styled.section`
margin-bottom: 40px;

.banner__wrapper {
  padding: 0px 80px;
  margin: 0px auto;
  max-width: 1440px;
  margin-top: 40px;
  background: #F0F4EF;
  border-radius: 16px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  }

  .block__text-button {
    position: absolute;
    top:80px;
    left: 108px;
  }

  .banner__title {
    color: #0D1821;
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
  }

  .button__block {
    padding: 10px 50px;
  }

  .banner__subtitle p {
    line-height: 30px;
    font-size: 20px;
  }
  
  .banner__subtitle {
    max-width: 200px;
    font-weight: 500;
    color: #344966;
    margin-bottom: 50px;
  }

  .books__wrapper {
    max-width: 542px;
    height: 267px;
  }

  .books {
    width: 100%;
    height: 100%;
  }

  .human__wrapper {
    max-width: 406px;
    height: 400px;
    margin-right: 108px;
  }

  .human {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1440px)  {
    
    .banner__wrapper {
      width: 804px;
      margin-top: 45px;
    }

    .banner__title {
      font-size: 32px;
    }

    .banner__subtitle p {
      line-height: 24px;
      font-size: 16px;
    }

    .banner__subtitle {
      margin-bottom: 40px;
    }

    .books__wrapper {
      margin-top: 78px;
      max-width: 361px;
      height: 218px;
    }

    .books {
      width: 100%;
      height: 100%;
    }

    .human__wrapper {
      width: 328px;
      height: 364px;
      margin-right: 14px;
      position: absolute;
      left: 470px;
    }

    .human {
      width: 100%;
      height: 100%;
    }

    .block__text-button {
      position: absolute;
      top:50px;
      left: 40px;
    }

  }

  @media (max-width: 834px)  { 
    padding: 0px 5px;
    
    .banner__wrapper {
      max-width: 290px;
    }

    .banner__wrapper {
      flex-direction: column;
    }

    .block__text-button {
      top: 20px;
      left: 20px;
    }

    .human__wrapper {
      width: 253px;
      height: 282px;
      position: static;
    }

    .human {
      width: 100%;
      height: 100%;
    }

    .books__wrapper {
      margin-top: 17px;
      position: static;
      max-width: 232px;
      height: 140px;
      margin-bottom: 66px;
    }

    .books {
      width: 100%;
      height: 100%;
    }

    .banner__title {
      font-size: 18px;
      line-height: 27px;
    }

    .banner__subtitle p {
    line-height: 21px;
    font-size: 14px;
    }

}
`;

export default StyledHighBanner;
