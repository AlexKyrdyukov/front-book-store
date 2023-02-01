import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { AxiosError } from 'axios';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { authApi } from '../../../api';

import { useAppDispatch } from '../../../store';
import { userSliceActions } from '../../../store/slices/userSlice';
import cookies from '../../../utils/coookieHelper';
import validationDate from '../../../utils/validationSchemas';
import errorHandler from '../../../utils/errorHandler';

import mainImage from './images/human.png';
import hideLogo from './images/hide.svg';
import mailLogo from './images/mail.svg';

import StyledSignInPage from './SignIn.style';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();

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
      try {
        const response = await authApi.signIn({
          email: values.email,
          password: values.password,
        });
        const { accessToken, refreshToken, user } = response;
        cookies.access.set(accessToken);
        cookies.refresh.set(refreshToken);
        dispatch(userSliceActions.setUser(user));
        toast.info('welcome to account wish you happy shopping');
        actions.resetForm({
          values: {
            email: '',
            password: '',
          },
        });
      } catch (error) {
        if (error instanceof AxiosError) {
          return actions.setErrors(errorHandler(error));
        }
        console.error(error);
      }
    },
  });
  return (
    <StyledSignInPage>
      <form
        onSubmit={formik.handleSubmit}
        className="block__form"
      >
        <h2 className="title">Sign In</h2>
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
        <div className="block__button">
          <Button
            className="button"
            disabled={formik.isSubmitting}
            type="submit"
          >Log In
          </Button>
        </div>
      </form>
      <div className="block__image">
        <img
          className="image__human"
          src={mainImage}
          alt="human"
        />
      </div>
    </StyledSignInPage>
  );
};

export default SignUp;
