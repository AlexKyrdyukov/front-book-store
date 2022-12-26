import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ErrorMessage, useFormik } from 'formik';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../store';
import userThunks from '../../../store/userThunks';
import { StyledSignUpPage } from './SignUp.style';
import mailLogo from './images/mail.svg';
import hideLogo from './images/hide.svg';
import mainImage from './images/human.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import schema from '../../../utils/validationSchemas/userSchemas';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema.signUp,
    onSubmit: async (values, actions) => {
      await dispatch(userThunks.createUser({
        email: values.email,
        password: values.password,
      })).unwrap()
        .catch((error) => toast.error(error.message));
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
      <ToastContainer />
      <div className="sign-up__wrapper">
        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="block__form"
        >
          <h2 className="title">Sign Up</h2>
          <Input
            placeholder="Email"
            // id="email"
            name="email"
            type="email"
            src={mailLogo}
            alt="logo email"
            text="Enter your email"
            className="sign-up__input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            classNameError={formik.errors.email &&
              formik.touched.email
              ? 'input__error'
              : ''
            }
            errorText={formik.errors.email &&
              formik.touched.email
              ? formik.errors.email
              : ''
            }
          />
          <Input
            placeholder="Password"
            // id="password"
            name="password"
            type="password"
            alt="logo password"
            src={hideLogo}
            text="Enter your password"
            className="sign-up__input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            classNameError={formik.errors.password &&
              formik.touched.password
              ? 'input__error'
              : ''
            }
            errorText={formik.errors.password &&
              formik.touched.password
              ? formik.errors.password
              : ''
            }
          />
          <Input
            placeholder="Password replay"
            // id="confirmPassword"
            name="confirmPassword"
            type="password"
            alt="logo password"
            src={hideLogo}
            text="Repeat your password without errors"
            className="sign-up__input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            classNameError={formik.errors.confirmPassword &&
              formik.touched.confirmPassword
              ? 'input__error'
              : ''
            }
            errorText={formik.errors.confirmPassword && formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : ''
            }
          />
          <span className="block__button">
            <Button
              disabled={formik.isSubmitting}
              text="Sing Up"
              type="submit"
              isMobile
            // onClick={formik.handleReset}
            />
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
