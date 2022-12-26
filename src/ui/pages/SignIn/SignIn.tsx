import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';

import {
  useAppDispatch,
} from '../../../store/index';
import userThunks from '../../../store/userThunks';
import { StyledSignInPage } from './SignIn.style';
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
          <span className="block__button">
            <Button
              disabled={formik.isSubmitting}
              text="Log In"
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
    </StyledSignInPage>
  );
};

export default SignUp;
