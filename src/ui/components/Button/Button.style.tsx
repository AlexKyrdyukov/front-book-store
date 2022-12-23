import styled from 'styled-components';

type StyleType = {
  isMobile?: boolean;
  isHeader?: boolean;
  isLogin?: boolean;
  left?: boolean;
  right?: boolean;
};
export const StyledButton = styled.button<StyleType>`
  background: #344966;
  padding: 10px 50px;
  border-radius: 16px;
  color: #F0F4EF;
  white-space: nowrap;
  font-size: 16px;
  border-top-right-radius: ${(props) => (props.left ? '0px' : '16px')};
  border-bottom-right-radius: ${(props) => (props.left ? '0px' : '16px')};
  border-top-left-radius: ${(props) => (props.right ? '0px' : '16px')};
  border-bottom-left-radius: ${(props) => (props.right ? '0px' : '16px')};
  padding-right: ${(props) => (props.left ? '0px' : '50px')};
  padding-left: ${(props) => (props.right ? '0px' : '50px')};
  @media (max-width: 1440px)  { 
  
  }
  @media (max-width: 834px)  { 
    font-size: 12px;
    padding-left:  ${(props) => (props.isMobile ? '50px' : '20px')};
    padding-right: ${(props) => (props.isMobile ? '50px' : '20px')};
    padding-right: ${(props) => (props.left ? '0px' : '20px')};
    padding-left: ${(props) => (props.right ? '0px' : '20px')};
    padding-bottom: 10px;
    padding-top: 10px;
  }

`;
