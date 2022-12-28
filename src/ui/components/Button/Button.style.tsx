import styled from 'styled-components';

type StyleType = {
  isMobile?: boolean;
  isHeader?: boolean;
  isLogin?: boolean;
};

export const StyledButton = styled.button<StyleType>`
  background: #344966;
  border-radius: 16px;
  color: #F0F4EF;
  white-space: nowrap;

  @media (max-width: 834px)  { 
  }
  
  @media (max-width: 728px)  { 
  }

`;
