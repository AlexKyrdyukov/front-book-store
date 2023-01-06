import styled from 'styled-components';

const StyledLowBanner = styled.section`
  padding: 0px 80px;
  max-width: 1440px;
  margin: 0px auto;
  margin-top: 20px;
  margin-bottom: 40px;

  .low-banner__wrapper {
    background: #F0F4EF;
    border-radius: 16px;
    display: flex;
    justify-content: flex-end;
    position: relative;
    border-radius: 16px;
    height: 400px;
  }

  .low-banner__button {
    padding: 10px 20px;
    font-weight: 500;
    font-size: 16px;
  }

  .button__block :first-child button {
    margin-right: 10px;
  }

  .button__block {
    position: absolute;
    z-index: 3;
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
    z-index: 0;
    max-height: 400px;
    max-width: 478px;
    position: absolute;
    right: -20px;
    top: -60px;
  }

  .fairy {
    width: 100%;
    height: 100%;
  }

  .button-text__block {
    margin-top: 80px;
    margin-right: 50px
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
    max-width: 435px;
    margin-bottom: 50px;
  }

  @media (max-width: 1280px) {
    
    .image__castle-block {
      width: 421px;
      height: 362px;
      left: 0px;
    } 

    .button-text__block h2 {
      font-size: 36px;
    }

    .button-text__block p {
      font-size: 18px;
    }

    .button-text__block {
      margin-right: 20px
    }
  }
  
  @media (max-width: 1028px) {
    padding: 0px 40px;

    .low-banner__wrapper{
      overflow: hidden;
    }

    .image__castle-block {
      left: 0px;
    }

    .image__fairy-block {
      right: -40px;
    }

    .image__castle-block {
      width: 389px;
      height: 345px;
    }
    
    .button-text__block {
      margin-right: 5px
    }
  }

  @media (max-width: 926px) {

    .button-text__block h2 {
      font-size: 32px;
    }

    .button-text__block p {
      font-size: 16px;
      max-width: 330px;
    }

    .button-text__block {
      margin-right: 15px
    }
  }

  @media (max-width: 834px) {
    padding: 0px 15px;

    .button-text__block {
      margin-right: 5px;
      max-width: 300px;
    }
  }

  @media (max-width: 750px) {

    .image__castle-block {
      width: 342px;
      height: 350px;
    }

    .castle {
      height: 100%;
      width: 100%;
    }
  }

  @media (max-width: 720px) {
    margin-bottom: 70px;
    
    .low-banner__wrapper {
      height: auto;
      flex-direction: column-reverse;
      align-items: center;
    }

    .image__castle-block {
      position: static;
    }

    .image__fairy-block {
      right: 0%;
      top:10px;
      height: 391px;
      width: 246px;
    }

    .button-text__block {
      margin-top: 20px;
      margin-bottom: 80px;
      margin-right: 0px;
      padding-left: 20px;
      
    }
  }
`;

export default StyledLowBanner;
