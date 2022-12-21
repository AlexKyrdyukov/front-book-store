import styled from 'styled-components';

export const StyledInput = styled.div`
display: flex;
align-items: center;
background: #F0F4EF;
border-radius: 16px;
width: 630px;
margin-right: 97px;

.block__image {
  
  max-width: 24px;
  max-height: 24px;
  margin-right: 20px;
  margin-left: 26px;
}

.block__input {
  padding: 20px 0;
  background: #F0F4EF;
  margin-right: 20px;
  width: 100%;
}


@media (max-width: 1440px)  { 
  width: 247px;
  margin-right: 51px;
}

@media (max-width: 834px)  { 
  margin-right: 0px;
  order: 1;
  width: 290px;
.block__input {
  padding: 10px 0;
}

}

`;
