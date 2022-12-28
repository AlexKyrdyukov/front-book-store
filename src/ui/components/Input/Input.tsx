import React from 'react';
import classNames from 'classnames';

import imageEye from './image/View.svg';
import StyledInput from './Input.style';

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

  // const blockClass = classNames('block__style', props.className, props.classNameError);
  // const textStyle = classNames('input__text', {
  // error__text: props.errorText,
  // });

  return (
    <StyledInput isHeader={props.isHeader}
      className={props.className}
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
    </StyledInput>
  );
};

export default Input;
