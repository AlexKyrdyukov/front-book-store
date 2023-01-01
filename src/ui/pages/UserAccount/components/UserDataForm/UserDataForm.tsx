import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

import validationDate from '../../../../../utils/validationSchemas/dataValidation';

import mailImage from './images/mailInput.svg';
import userImage from './images/userInput.svg';

import userApi from '../../../../../api/userApi';
import { useAppSelector } from '../../../../../store';

import StyledUserDataForm from './UserDataForm.style';

const UserDataForm: React.FC = () => {
  const [formState, setFormState] = React.useState<boolean>(false);

  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user!.id);
  const fullName = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user!.fullName);
  const email = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user!.email);

  const formik = useFormik({
    initialValues: {
      fullName: fullName || '',
      email,
    },
    validationSchema: yup.object({
      password: validationDate.password,
      newPassword: validationDate.newPassword,
      confirmPassword: validationDate.confirmNewPassword,
    }),
    onSubmit: async (values, actions) => {
      await userApi.changeData(userId, values.fullName, values.email);
      actions.resetForm({
        values: {
          email: '',
          fullName: '',
        },
      });
    },
  });

  return (
    <StyledUserDataForm>
      <div>
        <h3>
          Personal information
        </h3>
        <button
          type="button"
          onClick={() => setFormState(!formState)}
        >
          Change information
        </button>
        <form action="#">
          <Input
            id="fullName"
            placeholder="fucking pidr"
            label="Your name"
            type="text"
            alt="human image"
            src={mailImage}
            {...formik.getFieldProps('fullName')}
          />
          <Input
            id="email"
            placeholder="picka@mail.com"
            label="Your email"
            type="email"
            alt="envelope  image"
            src={userImage}
            {...formik.getFieldProps('email')}
          />
          {formState
            ? (<Button
              type="button"
              className="confirm-button"
            >Confirm
               </Button>) : null}
        </form>
      </div>
    </StyledUserDataForm>
  );
};

export default UserDataForm;