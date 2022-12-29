import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import authApi from '../../../api/authApi';
import validationDate from '../../../utils/validationSchemas/dataValidation';

import mainImage from './images/human.png';
import hideLogo from './images/hide.svg';
import mailLogo from './images/mail.svg';
import StyledSignInPage from './SignIn.style';

const SignUp: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: validationDate.requiredEmail,
      password: validationDate.requiredPassword,
    }),
    onSubmit: async (values, actions) => {
      await authApi.signIn({
        email: values.email,
        password: values.password,
      });
      actions.resetForm({
        values: {
          email: '',
          password: '',
        },
      });
    },
  });

  return (
    <StyledSignInPage>
      <ToastContainer />
      <div className="sign-up__wrapper">
        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="block__form"
        >
          <h2 className="title">Sign In</h2>
          <Input
            placeholder="Email"
            // id="email"
            id="email"
            type="email"
            src={mailLogo}
            alt="logo email"
            text="Enter your email"
            className="sign-up__input"
            {...formik.getFieldProps('email')}
          />
          <Input
            placeholder="Password"
            // id="password"
            id="password"
            type="password"
            alt="logo password"
            src={hideLogo}
            text="Enter your password"
            className="sign-up__input"
            {...formik.getFieldProps('password')}
          />
          <div className="block__button">
            <Button
              className="button"
              disabled={formik.isSubmitting}
              type="submit"
            // onClick={formik.handleReset}
            >Log In
            </Button>
          </div>
        </form>
        <div className="block__image">
          <img
            className="image__human"
            src={mainImage}
            alt="image with reading human"
          />
        </div>
      </div>
    </StyledSignInPage>
  );
};

export default SignUp;
