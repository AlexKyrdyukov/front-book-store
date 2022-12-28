import styled from 'styled-components';

const StyledLowBanner = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  .footer__wrapper {
    background: #F0F4EF;
    display: flex;
    justify-content: end;
    flex-wrap: nowrap;
    width: 1440px;
    padding: 0px 80px;
    position: relative;
    border-radius: 16px;
    height: 400px;
    overflow: hidden;
  }

  .button {
    padding: 10px 20px;
  }

  .button__block :first-child button {
    margin-right: 10px;
  }

  .image__castle-block {
    position: absolute;
    width: 521px;
    height: 462px;
    left: 108px;
    bottom: 0px;
  }

  .castle {
    height: 100%;
  }

  .image__fairy-block {
    max-height: 400px;
    max-width: 478px;
    position: absolute;
    bottom: 60px;
  }

  .fairy {
    width: 100%;
    height: 100%;
  }

  .button-text__block {
    position: absolute;
    left: 757px;
    top: 80px;
  }

  .button-text__block h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    margin-bottom: 10px;
  }

  .button-text__block p {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #0D1821;
    max-width: 415px;
    margin-bottom: 50px;
  }

  @media (max-width: 1440px)  {

    .footer__wrapper {
      width: 803px;
    }
    
    .image__castle-block {
    position: absolute;
    width: 389px;
    height: 345px;
    left: 0px;
    bottom: 0px;
    }

    .castle {
      height: 100%;
    }

    .button-text__block {
      position: absolute;
      left: 410px;
      top: 80px;
    }

    .button-text__block h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 22px;

    }

    .button-text__block p {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #0D1821;
      max-width: 392px;
      margin-bottom: 40px;
    }

    .image__fairy-block {
      max-height: 400px;
      max-width: 377px;
      position: absolute;
      bottom: 62px;
      right: -10px;
    }

    .fairy {
      width: 100%;
      height: 100%;
    }

  }

  @media (max-width: 834px)  { 
    
    .footer__wrapper {
      width: 289px;
      height: 501px;
    }

    .image__castle-block {
      position: absolute;
      width: 282px;
      height: 250px;
      left: 0px;
      bottom: 0px;
    }

    .castle {
      height: 100%;
    }

    .button-text__block {
      left: 20px;
      top: 20px;
      
    }

    .button-text__block h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 20px;
    }

    .button-text__block p {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      max-width: 249px;
      margin-bottom: 20px;
    }

    .image__fairy-block {
      max-height: 341px;
      max-width: 246px;
      position: absolute;
      right: 0px;
      top: 0px;
    }

    .fairy {
      width: 100%;
      height: 100%;
    }
  }
`;

export default StyledLowBanner;
