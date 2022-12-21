import React from 'react';
import Input from '../../components/Input';
import { StyledSignUpPage } from './SignUp.style';
import mailLogo from './images/mail.svg';
import hideLogo from './images/hide.svg';
import mainImage from './images/human.png';

type PropsType = {
  src?: string;
  alt?: string;
};

const SignUp: React.FC<PropsType> = (props) => {
  return (
    <StyledSignUpPage>
      <div className="sign-up__wrapper">
        <div className="block__form">
          <h2 className="title">Sign Up</h2>
          <Input
            placeholder="Email"
            type="email"
            src={mailLogo}
            alt="logo email"
          />
          <Input
            placeholder="Password"
            type="password"
            alt="logo password"
            src={hideLogo}
          />
          <Input
            placeholder="Password replay"
            type="text"
            alt="logo password"
            src={hideLogo}

          />

        </div>
        <div className="block__image">
          <img src={mainImage} alt="image with reading human" />
        </div>

      </div>
    </StyledSignUpPage>
  );
};

export default SignUp;
