import React from 'react';
import type { FormikErrors } from 'formik';

import classNames from 'classnames';

import imageEye from './image/View.svg';

import StyledInput from './Input.style';

type PropType = {
  placeholder: string;
  type: string;
  src: string;
  hintText?: string;
  errorText?: FormikErrors<string>;
  touchedInfo?: unknown;
  alt: string;
  label?: string;
  className?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<PropType> = (props) => {
  const [inputState, setInputState] = React.useState<boolean>(false);

  const inputStyle = classNames(props.className, {
    input__error: props.errorText && props.touchedInfo,
  });

  return (
    <StyledInput
      label={props.label}
      className={inputStyle}
    >
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
      {props.label &&
        (
          <label
            className="label__input"
            htmlFor={props.name}
          >
            {props.label}
          </label>)
      }
      <input
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        name={props.name}
        className="input"
        type={
          props.type === 'password' && inputState
            ? 'text'
            : props.type
        }
        placeholder={props.placeholder}
      />
      {props.errorText && props.touchedInfo
        ? <div className="hint__text error__text">{props.errorText}</div>
        : <div className="hint__text">{props.hintText}</div>}
    </StyledInput>
  );
};

export default Input;
