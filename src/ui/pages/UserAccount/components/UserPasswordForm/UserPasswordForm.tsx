import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AxiosError } from 'axios';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

import validationDate from '../../../../../utils/validationSchemas';
import userApi from '../../../../../api/userApi';
import { userSliceActions } from '../../../../../store/slices/userSlice';
import { useAppSelector, useAppDispatch } from '../../../../../store';
import errorHandler from '../../../../../utils/errorHandler';

import eyeImage from './images/eyeInput.svg';

import StyledFormPassword from './UserPasswordForm.style';

type PropType = {
  className: string;
};

const UserPasswordForm: React.FC<PropType> = (props) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((reducer) => reducer.rootSlice.userSlice.user?.id);

  const removeUser = async () => {
    try {
      await userApi.deleteUser(userId);
      dispatch(userSliceActions.removeUser());
    } catch (error) {
      console.error(error);
    }
  };
  const [formState, setFormState] = React.useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    },

    validationSchema: yup.object({
      password: validationDate.password,
      newPassword: validationDate.newPassword,
      confirmNewPassword: validationDate.confirmNewPassword,
    }),

    onSubmit: async (values, actions) => {
      try {
        await userApi.changePassword(
          userId, values.password, values.newPassword,
        );
        actions.resetForm({
          values: {
            newPassword: '',
            password: '',
            confirmNewPassword: '',
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
    <StyledFormPassword
      className={props.className}
    >
      <div className="block__title">
        <h3>Password</h3>
        <button
          type="button"
          onClick={() => setFormState(!formState)}
        >
          Change password
        </button>
      </div>
      <form
        onSubmit={formik.handleSubmit}
      >
        <Input
          placeholder=""
          className="input__margin"
          label="Your password"
          type="password"
          alt="eye  image"
          errorText={formik.errors.password}
          touchedInfo={formik.touched.password}
          src={eyeImage}
          {...formik.getFieldProps('password')}
        />
        {formState
          ? (
            <><Input
              placeholder="New Password"
              type="password"
              alt="eye  image"
              className="input__margin"
              src={eyeImage}
              errorText={formik.errors.newPassword}
              hintText="Enter your password"
              touchedInfo={formik.touched.newPassword}
              {...formik.getFieldProps('newPassword')}
            />
              <Input
                placeholder="Password replay"
                type="password"
                className="input__margin"
                alt="eye  image"
                src={eyeImage}
                hintText="Repeat your password without errors"
                errorText={formik.errors.confirmNewPassword}
                touchedInfo={formik.touched.confirmNewPassword}
                {...formik.getFieldProps('confirmNewPassword')}
              />
              <Button
                type="submit"
                className="confirm-button"
                disabled={formik.isSubmitting}
              >
                Confirm
              </Button>
              <Button
                type="button"
                className="delete-button"
                onClick={removeUser}
              >
                Remove user
              </Button>
            </>)
          : null
        }
      </form>

    </StyledFormPassword >
  );
};

export default UserPasswordForm;
