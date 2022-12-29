import React from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import authApi from '../../../api/authApi';
import validationData from '../../../utils/validationSchemas/dataValidation';

import mailLogo from './images/mail.svg';
import hideLogo from './images/hide.svg';
import mainImage from './images/human.png';
import StyledSignUpPage from './SignUp.style';

const SignUp: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object({
      email: validationData.requiredEmail,
      password: validationData.requiredPassword,
      confirmPassword: validationData.confirmPassword,
    }),
    onSubmit: async (values, actions) => {
      await authApi.signUp({
        email: values.email,
        password: values.password,
      });
      actions.resetForm({
        values: {
          email: '',
          password: '',
          confirmPassword: '',
        },
      });
    },
  });

  return (
    <StyledSignUpPage>
      <div className="sign-up__wrapper">
        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="block__form"
        >
          <h2 className="title">Sign Up</h2>
          <Input
            placeholder="Email"
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
            id="password"
            type="password"
            alt="logo password"
            src={hideLogo}
            text="Enter your password"
            className="sign-up__input"
            {...formik.getFieldProps('password')}
          />
          <Input
            placeholder="Password replay"
            id="confirmPassword"
            type="password"
            alt="logo password"
            src={hideLogo}
            text="Repeat your password without errors"
            className="sign-up__input"
            {...formik.getFieldProps('confirmPassword')}
          />
          <span className="block__button">
            <Button
              className="button"
              disabled={formik.isSubmitting}
              type="submit"
            // onClick={formik.handleReset}
            >Sing Up
            </Button>
          </span>
        </form>
        <div className="block__image">
          <img
            className="image__human"
            src={mainImage}
            alt="image with reading human"
          />
        </div>
      </div>
    </StyledSignUpPage>
  );
};

export default SignUp;
