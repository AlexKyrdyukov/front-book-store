import styled from 'styled-components';

export const StyledFooter = styled.footer`
background: #0D1821;

.footer__container {
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  max-width: 1280px;
  padding: 0 15px;
  padding-top: 73px;
  padding-bottom: 73px;
}

.footer__contacts {
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  color: #F0F4EF;
  font-weight: 500;
  font-size: 20px;
}

.footer__logo {
  height: 46px;
  width: 88px;
  margin-bottom: 40px;
} 

.footer__url {
  margin-bottom: 10px;
}

.footer__phone-number {
    
}

.links__list li {
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
  margin-bottom: 7px;
  margin-right: 5px;
  margin-bottom: 7px;
}

.footer__map-image {
  border-radius: 6px;
  max-width: 413px;
  height: 160px;
  width: 100%;
}
@media (max-width: 1440px)  { 
.footer__container {
  max-width: 834px;
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

.footer__map-image {
  border-radius: 6px;
  max-width: 392px;
  height: 160px;
  width: 100%;
}

}

@media (max-width: 834px)  { 
  .footer__container {
    flex-direction: column;
    padding-bottom: 30px;
    max-width: 290px;
    width: 100%;
  }

  .footer__contacts {
    font-size: 16px;
    margin-bottom: 40px;
  }

  
  .footer__phone-number {
    margin-bottom: 40px;
  }
  .footer__logo {
    margin-bottom: 30px;

  }

}



`;
