import React from 'react';

import CircleButton from '../../components/CircleButton';
import Input from '../../components/Input';

import pseudoPhoto from './images/user.svg';
import camera from './images/camera.png';
import mailImage from './images/mailInput.svg';
import userImage from './images/userInput.svg';
import eyeImage from './images/eyeInput.svg';

import StyledUserAccount from './UserAccount.style';

type PropsType = {
  value?: string | undefined;
};

const UserAccount: React.FC<PropsType> = () => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files[0];
    // eslint-disable-next-line no-console
    console.log(event.target.value);
  };

  return (
    <StyledUserAccount>
      <div className="page__wrapper">
        <div className="block__user-photo">
          <picture>
            <source className="books" media="(min-width: 1440px)" srcSet={pseudoPhoto} />
            <source className="books" media="(min-width: 834px)" srcSet={pseudoPhoto} />
            <img className="books" src={pseudoPhoto} alt="Flowers" />
          </picture>
          <div className="input__block">
            <form action="">
              <CircleButton
                type="button"
                src={camera}
              />
              <input
                className="input__file"
                accept="image/*"
                type="file"
                onChange={changeHandler}
              />
            </form>
          </div>
        </div>
        <div className="block__user-info">
          <form action="">
            <h3>
              Personal information
            </h3>
            <button>
              Change information
            </button>
            <Input
              placeholder="fucking pidr"
              label="Your name"
              type="text"
              alt="human image"
              src={mailImage}
            />
            <Input
              placeholder="picka@mail.com"
              label="Your email"
              type="email"
              alt="envelope  image"
              src={userImage}

            />
          </form>
          <form action="">
             <h3>Password</h3>
             <button>
              Change information
             </button>
             <Input
                placeholder="picka@mail.com"
                label="Your password"
                type="password"
                alt="eye  image"
                src={eyeImage}
              />
          </form>
        </div>
      </div>
    </StyledUserAccount>
  );
};

export default UserAccount;
