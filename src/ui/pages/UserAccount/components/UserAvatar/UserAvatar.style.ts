import styled from 'styled-components';

const StyledAvatar = styled.div`
  width: 305px;
  height: 305px;
  border-radius: 16px;
  background: #F0F4EF;
  display: flex;
  justify-content: center;
  position: relative;

  .circle__button {
    width: 48px;
    height: 48px;
  }

  .block__user-photo {
    max-width: 305px;
    max-height: 305px;
    align-self: center;
    overflow: hidden;
    border-radius: 16px;
  }

  .user-photo {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: contain;
  }

  .input__block {
    position: relative;
  }

  .input__file {
    cursor: pointer;
    position: absolute;
    width: 48px;
    min-height: 48px;
    border-radius: 63px;
    top: 0px;
    opacity: 0;
  }

  .input__block {
    width: 48px;
    height: 48px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  @media(max-width: 834px) {
    width: 255px;
    height: 255px;

    .circle__button {
      width: 40px;
      height: 40px;
    }

    .input__file {
      width: 40px;
      min-height: 40px;
    }

    .input__block {
      width: 40px;
      height: 40px;
      bottom: 15px;
      right: 15px;
    }
  }

  @media(max-width: 655px) {
    width: 290px;
    height: 290px;
  }
`;

export default StyledAvatar;
