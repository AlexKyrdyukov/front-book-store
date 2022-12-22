import React from 'react';
import classNames from 'classnames';
import { StyledInput } from './Input.style';

type PropType = {
  placeholder: string;
  type: string;
  src: string;
  text?: string;
  error?: string;
  alt: string;
  class?: string;
  isHeader?: boolean;
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<PropType> = (props) => {
  const blockClass = classNames('block__style', {
    [`${props.class}`]: true,
  });

  return (
    <StyledInput isHeader={props.isHeader}>
      <div
        className={blockClass}
      >
        <div className="input__text">
          {props.error ? props.error : props.text}
        </div>
        <img
          className="image"
          src={props.src}
          alt={props.alt}
        />
        <input className="input" type={props.type} placeholder={props.placeholder} />
      </div>
    </StyledInput>
  );
};

export default Input;
