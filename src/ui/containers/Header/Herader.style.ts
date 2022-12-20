import styled from 'styled-components';

export const StyledHeader = styled.header`


max-width: 1280px;
display: flex;
align-items: center;
margin: 24px auto 0 auto;
padding: 0 15px;
.header__image {
  max-height: 46px;
  max-width: 88px;
    @media  (min-width: 320px) and (max-width: 850px)  { 
    max-width: 800px;
  }
}
.header__link {
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  margin-left: 125px;
    @media  (min-width: 320px) and (max-width: 850px)  { 
  margin-left: 17px;
  }
    @media  (min-width: 850px) and (max-width: 1280px)  { 
  margin-left: 50px;
  }
  
}
`;
