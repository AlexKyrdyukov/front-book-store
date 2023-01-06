import styled from 'styled-components';

const StyledHighBanner = styled.section`
  padding: 0px 80px;
  max-width: 1440px;
  margin: 0px auto;
  margin-top: 20px;
  margin-bottom: 40px;

  .high-banner__wrapper {
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

  .high-banner__title {
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
    max-height: 267px;
  }

  .books {
    width: 100%;
    height: 100%;
  }

  .human__wrapper {
    width: 406px;
    height: 400px;
    margin-right: 98px;
  }

  .human {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1280px)  {
    
    .block__text-button {
      position: absolute;
      top:80px;
      left: 48px;
    }

    .high-banner__title {
      font-size: 32px;
      white-space: nowrap;
    }

    .human__wrapper {
      margin-right: 0px;
    }

    .books__wrapper {
      width: 442px;
      height: 207px;
    }
  }

  @media (max-width: 1028px) {
    padding: 0px 40px;
  }

  @media (max-width: 834px)  {
    padding: 0px 15px;
    max-width: 834px;
    height: 289px;

    .high-banner__wrapper {
      justify-content: flex-start;
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

    .human__wrapper {
      width: 328px;
      height: 364px;
      margin-right: 14px;
      position: absolute;
      right: -15px;
    }

    .block__text-button {
      position: absolute;
      top:50px;
      left: 40px;
    }
  }

  @media (max-width: 814px)  {
    
    .high-banner__title { 
      font-size: 28px; 
    } 
  }

  @media (max-width: 720px)  { 
    height: auto;

    .high-banner__wrapper {
      align-items: center;
      flex-direction: column;
    }

    .block__text-button {
      top: 100px;
      transform: translate(-50%, -50%);
      left: 50%;
    }

    .human__wrapper {
      width: 328px;
      height: 364px;
      position: static;
    }

    .books__wrapper {
      margin-top: 17px;
      position: static;
      margin-bottom: 66px;
    }

    .high-banner__title {
      font-size: 18px;
      line-height: 27px;
    }

    .banner__subtitle p {
      line-height: 21px;
      font-size: 14px;
    }
  }

  @media (max-width: 395px)  { 

    .books__wrapper {
      align-self: flex-end;
      max-width: 232px;
      height: 140px;
    }

    .human__wrapper {
        width: 253px;
        height: 282px;
    }
  }
`;

export default StyledHighBanner;
