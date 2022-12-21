import React from 'react';
import { StyledInput } from './Input.style';

type PropType = {
  placeholder: string;
  type: string;
  src: string;
  text?: string;
  error?: string;
  alt: string;
};

const Input: React.FC<PropType> = (props) => {
  return (
    <StyledInput>
      <img
        className="block__image"
        src={props.src}
        alt={props.alt}
      />
      <input className="block__input" type={props.type} placeholder={props.placeholder} />
      {props.error ? props.error : props.text}
    </StyledInput>
  );
};

export default Input;
