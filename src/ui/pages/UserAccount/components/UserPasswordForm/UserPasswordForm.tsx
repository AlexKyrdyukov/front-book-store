import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';

import validationDate from '../../../../../utils/validationSchemas/dataValidation';

import userApi from '../../../../../api/userApi';
import { useAppSelector } from '../../../../../store';

import eyeImage from './images/eyeInput.svg';

import StyledFormPassword from './UserPasswordForm.style';

const UserPasswordForm = () => {
  const iserId = useAppSelector((reducer) => reducer.userReducer.user?.id);
  
  const [formState, setFormState] = React.useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      password: 'sssssssssssssss',
      newPassword: 'wwwwwwwwwwwwwwwwwwwww',
      confirmNewPassword: '',
    },
    validationSchema: yup.object({
      password: validationDate.password,
      newPassword: validationDate.newPassword,
      confirmPassword: validationDate.confirmNewPassword,
    }),
    onSubmit: async (values, actions) => {
      await userApi.changePassword(userId, values.password, values.newPassword);
      actions.resetForm({
        values: {
          newPassword: '',
          password: '',
          confirmNewPassword: '',
        },
      });
    },
  });

  return (
    <StyledFormPassword>
      {formState
        ? (<div> <h3>Password</h3>
          <button
            type="button"
            onClick={() => setFormState(!formState)}
          >
            Change information
          </button>
          <form action="">
            <Input
              placeholder="picka@mail.com"
              label="Your password"
              type="password"
              alt="eye  image"
              src={eyeImage}
            />
          </form>
           </div>)
        : (
          <div>
            <h3>Password</h3>
            <button
              type="button"
              onClick={() => setFormState(!formState)}
            >
              Change information
            </button>
            <form action="#">
              <Input
                id="oldPassword"
                placeholder="picka@mail.com"
                label="Old password"
                type="password"
                alt="eye  image"
                src={eyeImage}
                {...formik.getFieldProps('oldPassword')}
              />
              <Input
                id="newPassword"
                placeholder="New Password"
                type="password"
                alt="eye  image"
                src={eyeImage}
                {...formik.getFieldProps('newPassword')}
              />
              <Input
                id="confirmNewPassword"
                placeholder="Password replay"
                type="password"
                alt="eye  image"
                src={eyeImage}
                {...formik.getFieldProps('confirmNewPassword')}
              />
              <Button
                type="button"
                className="confirm-button"
              >Confirm
              </Button>
            </form>
          </div>)
      }
    </StyledFormPassword>
  );
};

export default UserPasswordForm;
