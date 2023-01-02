import styled from 'styled-components';

const StyledFooter = styled.footer`
background: #0D1821;

.footer__container {
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  max-width: 1440px;
  padding: 73px 80px;
}

.button__log-out {
  display: inline-block;
  max-height: 46px;
  max-width: 88px;
  margin-bottom: 40px;
  background-color: #0D1821;
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  color: #F0F4EF;
  font-weight: 500;
  font-size: 20px;
}

.footer__logo {
  height: 100%;
  width: 100%;
} 

.footer__url {
  margin-bottom: 10px;
}

.footer__phone-number {
    
}

.links__list a {
  display: block;
  margin-bottom: 15px;
  white-space: nowrap;
}

.links__list {
  margin-bottom: 40px;
}

.footer__link {
  color: #F0F4EF;
  font-weight: 500;
  font-size: 20px;
}

.footer__map-block {
  display: flex;
  flex-direction: column;
}

.footer__address {
  display: inline;
  color: #F0F4EF;
  font-weight: 500;
  font-size: 20px;
  margin-right: 5px;
  margin-bottom: 7px;
}


.image__block {
  max-width: 413px;
  height: 160px;
}

.footer__map-image {
  border-radius: 6px;
  height: 100%;
  width: 100%;
  object-fit: cover;

}

@media (max-width: 1028px)  { 
  .footer__container {
    padding: 73px 40px;
  }
}


@media (max-width: 834px)  { 

  .footer__container {
    max-width: 834px;
    padding: 73px 15px;

  }

  .footer__url {
    font-size: 16px;
  }

  .footer__phone-number {
    font-size: 16px;
  }

  .footer__link {
    font-size: 16px;
  }

  .footer__address {
    font-size: 16px;
  }
  
  .footer__contacts {
  }

  .image__block {
    max-width: 392px;
    height: 160px;
  }

  .footer__map-image {
    border-radius: 6px;
    height: 100%;
    width: 100%;
  }

}

@media (max-width: 553px)  {  

  .footer__container {
    flex-direction: column;
    padding-bottom: 30px;
    max-width: 320px;
    width: 100%;
  }

  .footer__contacts {
    font-size: 16px;
    margin-bottom: 40px;
  }

  
  .footer__phone-number {
    margin-bottom: 40px;
  }

  .button__log-out {
    margin-bottom: 30px;
  }

  .links__list a {
    display: block;
    margin-bottom: 13px;
    white-space: nowrap;
  }

  .links__list {
    margin-bottom: 27px;
  }

  .footer__address {
    line-height: 24px;
    margin-bottom: 0px;
    margin-right: 0px;
  }

    .image__block {
    max-width: 290px;
    height: 160px;
  }

  .footer__map-image {
    border-radius: 6px;
    height: 100%;
    width: 100%;
  }
}

`;

export default StyledFooter;
