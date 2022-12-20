import styled from 'styled-components';

export const StyledFooter = styled.footer`

background: #0D1821;

.footer__container {
  display: flex;
  max-width: 1280px;
  padding: 0 15px;
  padding-top: 73px;
  padding-bottom: 73px;

  margin: 24px auto 0 auto;
    @media  (min-width: 320px) and (max-width: 850px)  { 
  flex-direction: column;
  margin: 0px auto;
  }
}

.left__column {
  white-space: nowrap;

  display: flex;
  flex-direction: column;
  color: #F0F4EF;
  font-weight: 500;
  font-size: 20px;
  margin-right: 166px;
    @media  (min-width: 850px) and (max-width: 1280px)   { 
  margin-right: 56px;
  }
     @media  (min-width: 320px) and (max-width: 850px)  { 
  margin-bottom: 40px;
  }
}

.footer__logo {
  height: 46px;
  width: 88px;
  margin-bottom: 40px;
    @media  (min-width: 320px) and (max-width: 850px)  { 
  margin-bottom: 30px;
  }
} 

.footer__url {
  margin-bottom: 10px;

  
}

.footer__phone-number {
    @media  (min-width: 320px) and (max-width: 850px) { 
  margin-bottom: 40px;

  }
}



.block__links {
}

.links__list li {
  margin-bottom: 15px;
  margin-right: 315px;
  white-space: nowrap;
    @media  (min-width: 850px) and (max-width: 1280px)   { 
  margin-right: 43px;
  }
}

.links__list {
     @media  (min-width: 320px) and (max-width: 850px)  { 
    margin-bottom: 40px ;
  }
}

.footer__link {
  color: #F0F4EF;
  font-weight: 500;
  font-size: 20px;
 
}

.footer__map-block {
   @media  (min-width: 320px) and (max-width: 850px)  { 
    display: flex;
    flex-direction: column;
  }
}

.footer__adress {
  display: inline-block;
  color: #F0F4EF;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 7px;
  margin-right: 5px;
  white-space: nowrap;

}

.footer__index {
 color: #F0F4EF;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 7px;
}

.footer__map-image {
  border-radius: 6px;
  height: 100%;

  height: 160px;
  width: 413px;

  @media  (min-width: 850px) and (max-width: 1280px)   { 
  height: 160px;
  height: 100%;

  width: 390px;
  }

    @media  (min-width: 320px) and (max-width: 850px)  { 
  height: 160px;
  width: 290px;
  height: 100%;
  }
}
`;
