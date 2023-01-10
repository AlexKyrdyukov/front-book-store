import styled from 'styled-components';

const StyledCircleButton = styled.button`
  background: #344966;
  border-radius: 63px;
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

  @media (max-width: 651px)  { 

    .image__block {
      max-width: 17px;
      height: 17px;
    }
}
`;

export default StyledCircleButton;
