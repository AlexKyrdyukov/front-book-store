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
  className?: string;
  classNameError?: string;
  isHeader?: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<PropType> = (props) => {
  const blockClass = classNames('block__style', {
    [`${props.className}`]: true,
    [`${props.classNameError}`]: true,
  });
  // eslint-disable-next-line no-console
  console.log(props.error);
  const textStyle = classNames({
    error__text: props.error,
    input__text: true,
  });

  return (
    <StyledInput isHeader={props.isHeader}>
      <div
        className={blockClass}
      >
        <div className={textStyle}>
          {props.error ? props.error : props.text}
        </div>
        <img
          className="image"
          src={props.src}
          alt={props.alt}
        />
        <input
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          id={props.id}
          name={props.name}
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </StyledInput>
  );
};

export default Input;
