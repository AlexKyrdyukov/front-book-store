import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { AxiosError } from 'axios';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAppDispatch } from '../../../store';
import { userSliceActions } from '../../../store/slices/userSlice';
import authApi from '../../../api/authApi';
import cookies from '../../../utils/coookieHelper';
import validationData from '../../../utils/validationSchemas';
import errorHandler from '../../../utils/errorHandler';

import mailLogo from './images/mail.svg';
import hideLogo from './images/hide.svg';
import mainImage from './images/human.png';

import StyledSignUpPage from './SignUp.style';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
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
      try {
        const response = await authApi.signUp({
          email: values.email,
          password: values.password,
        });
        const { accessToken, refreshToken, user, message } = response;
        cookies.access.set(accessToken);
        cookies.refresh.set(refreshToken);
        actions.resetForm({
          values: {
            email: '',
            password: '',
            confirmPassword: '',
          },
        });
        dispatch(userSliceActions.setUser(user));
        toast.info(message);
      } catch (error) {
        if (error instanceof AxiosError) {
          return actions.setErrors(errorHandler(error));
        }
        console.error(error);
      }
    },
  });

  return (
    <StyledSignUpPage>
      <form
        onSubmit={formik.handleSubmit}
        className="block__form"
      >
        <h2 className="title">Sign Up</h2>
        <Input
          placeholder="Email"
          type="email"
          src={mailLogo}
          alt="logo email"
          hintText="Enter your email"
          className="sign-up__input"
          errorText={formik.errors.email}
          touchedInfo={formik.touched.email}
          {...formik.getFieldProps('email')}
        />
        <Input
          placeholder="Password"
          type="password"
          alt="logo password"
          src={hideLogo}
          hintText="Enter your password"
          className="sign-up__input"
          errorText={formik.errors.password}
          touchedInfo={formik.touched.password}
          {...formik.getFieldProps('password')}
        />
        <Input
          placeholder="Password replay"
          type="password"
          alt="logo password"
          src={hideLogo}
          hintText="Repeat your password without errors"
          className="sign-up__input"
          errorText={formik.errors.confirmPassword}
          touchedInfo={formik.touched.confirmPassword}
          {...formik.getFieldProps('confirmPassword')}
        />
        <span className="block__button">
          <Button
            className="button"
            disabled={formik.isSubmitting}
            type="submit"
            onClick={() => formik.handleReset}
          >Sing Up
          </Button>
        </span>
      </form>
      <div className="block__image">
        <img
          className="image__human"
          src={mainImage}
          alt="human"
        />
      </div>
    </StyledSignUpPage>
  );
};

export default SignUp;
