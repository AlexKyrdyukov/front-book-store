import styled from 'styled-components';

export const StyledInput = styled.div`
margin-left: 43px;
display: flex;
align-items: center;
background: #F0F4EF;
border-radius: 16px;
width: 630px;
margin-right: 97px;
  @media  (min-width: 425px) and (max-width: 850px)  { 
  margin-right: 51px;
  width: 247px;

  }
    @media  (min-width: 425px)  { 
  /* margin-right: 51px; */
  }

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
`;
