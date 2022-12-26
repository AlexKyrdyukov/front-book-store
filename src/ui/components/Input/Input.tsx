import React from 'react';
import classNames from 'classnames';
import { StyledInput } from './Input.style';
import imageEye from './image/View.svg';

type PropType = {
  placeholder: string;
  type: string;
  src: string;
  text?: string;
  errorText?: string;
  alt: string;
  className?: string;
  classNameError?: string;
  isHeader?: boolean;
  // id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<PropType> = (props) => {
  const [inputState, setInputState] = React.useState<boolean>(false);

  const blockClass = classNames('block__style', {
    [`${props.className}`]: true,
    [`${props.classNameError}`]: true,
  });
  const textStyle = classNames({
    error__text: props.errorText,
    input__text: true,
  });

  return (
    <StyledInput isHeader={props.isHeader}>
      <div
        className={blockClass}
      >
        <label className={textStyle}>
          {props.errorText ? props.errorText : props.text}
        </label>
        <button
          className="image__block"
          type="button"
          onClick={() => setInputState(!inputState)}
        >
          <img
            className="image"
            src={
              props.type === 'password' && inputState
                ? imageEye
                : props.src
            }
            alt={props.alt}
          />
        </button>
        <input
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          // id={props.id}
          name={props.name}
          className="input"
          type={
            props.type === 'password' && inputState
              ? 'text'
              : props.type
          }
          placeholder={props.placeholder}
        />
        <span
          className="custom__placeholder"
        >
          {props.placeholder}
        </span>
      </div>
    </StyledInput>
  );
};

export default Input;
