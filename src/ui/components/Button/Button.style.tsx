import styled from 'styled-components';

type StyleType ={
  isMobile?: boolean;
};

export const StyledButton = styled.button<StyleType>`
  background: #344966;
  padding: 10px 50px;
  border-radius: 16px;
  color: #F0F4EF;
  white-space: nowrap;
  font-size: 16px;
  
  @media (max-width: 1440px)  { 
  
  }
  @media (max-width: 834px)  { 
    font-size: 12px;
    padding-left:  ${(props) => (props.isMobile ? '50px' : '20px')};
    padding-right: ${(props) => (props.isMobile ? '50px' : '20px')};
    padding-bottom: 10px;
    padding-top: 10px;
  }

`;
