import React from 'react';
import { useFormik } from 'formik';

import { StyledSignUpPage } from './SignUp.style';
import mailLogo from './images/mail.svg';
import hideLogo from './images/hide.svg';
import mainImage from './images/human.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import schema from '../../../utils/validationSchemas/userSchemas';

type PropsType = {
  src?: string;
  alt?: string;
};

const SignUp: React.FC<PropsType> = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatpassword: '',
    },
    validationSchema: schema.signUp,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert, no-console
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledSignUpPage>
      <div className="sign-up__wrapper">
        <form className="block__form">
        <h2 className="title">Sign Up</h2>
          <Input
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            src={mailLogo}
            alt="logo email"
            text="Enter your email"
            class="sign-up__input"
          />
          <Input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            alt="logo password"
            src={hideLogo}
            text="Enter your password"
            class="sign-up__input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <Input
            placeholder="Password replay"
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            alt="logo password"
            src={hideLogo}
            text="Repeat your password without errors"
            class="sign-up__input"
          />
          <span className="block__button">
            <Button
              text="Sing Up"
              type="submit"
              isMobile
            />
          </span>
        </form>
        <div className="block__image">
          <img className="image__human" src={mainImage} alt="image with reading human" />
        </div>
      </div>
    </StyledSignUpPage>
  );
};

export default SignUp;
