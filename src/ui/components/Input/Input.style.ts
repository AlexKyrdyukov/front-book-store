import styled from 'styled-components';

type StyleType = {
  isHeader?: boolean;
};

export const StyledInput = styled.div<StyleType>`
position: relative;

.block__style { 
  display: flex;
  align-items: center;
  background: #F0F4EF;
  border-radius: 16px;
}

.image {
  max-width: 18px;
  max-height: 18px;
  margin-right: 20px;
  margin-left: 26px;
}

.input {
  padding: 22px 0;
  background: #F0F4EF;
  margin-right: 20px;
  width: 100%;
}

.input__text {
  position: absolute;
  white-space: nowrap;
  top: 75px;
  font-size: 14px;
  color: #344966;
}

@media (max-width: 1440px)  { 
}

@media (max-width: 834px)  { 
  order: ${(props) => (props.isHeader ? 1 : 0)};
  .input {
    padding: 14px 0;
  }

  .input__text {
    font-size: 14px;
    top: 55px;

  }
}
`;
