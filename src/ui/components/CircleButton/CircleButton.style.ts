import styled from 'styled-components';

type StyleType = {
  isMobile?: boolean;
  isHeader?: boolean;
  isLogin?: boolean;
};

export const StyledCircleButton = styled.button<StyleType>`
  background: #344966;
  border-radius: 63px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
 
  .image__block {
    max-width: 25px;
    height: 25px;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 834px)  { 
    width: 32px;
    height: 32px;

    .image__block {
      max-width: 17px;
      height: 17px;
  }
}
`;
