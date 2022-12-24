import styled from 'styled-components';

type StyleType = {
  isHeader?: boolean;
};

export const StyledInput = styled.div<StyleType>`
position: relative;

  .custom__placeholder{
    position: absolute;
    display: none;
  white-space: nowrap;

  }


.input__text {
  position: absolute;
  white-space: nowrap;
  top: 75px;
  font-size: 14px;
  color: #344966;
}

.block__style { 
  display: flex;
  align-items: center;
  background: #F0F4EF;
  border-radius: 16px;
}

.error__text {
  color: red;
}


.image__block {
  margin-left: 26px;
  margin-right: 16px;
  /* max-width: 18px; */
  /* max-height: 18px; */
  max-width: ${(props) => (props.isHeader ? '19px' : '25px')};
  max-height: ${(props) => (props.isHeader ? '19px' : '20px')};
}

.image {
  width: 100%;
  height: 100%;
}


.input {
  padding: 22px 0;
  background: #F0F4EF;
  margin-right: 20px;
  width: 100%;
}

.input:focus + .custom__placeholder {
  font-size: 16px;
  display: inline;
  left: 65px;
  top: 8px;
  color: #B9BAC4;
}


.input::placeholder {

  font-size: 16px;
  color: #B9BAC4;
}

.input:focus::placeholder {
  color:#F0F4EF;
}

.input:focus {
  padding-bottom: 5px;
  padding-top: 39px ;
}

@media (max-width: 1440px)  { 

.input:focus {
  padding-bottom: 5px;
  padding-top: 39px ;
}

.input:focus + .custom__placeholder {
  font-size: 16px;
  display: inline;
  left: 65px;
  top: 7px;
  color: #B9BAC4;
}

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

  .input:focus {
  padding-bottom: 3px;
  padding-top: 25px ;
}

.input:focus + .custom__placeholder {
  font-size: 16px;
  display: inline;
  left: 65px;
  top: 3px;
  color: #B9BAC4;
}

}
`;
