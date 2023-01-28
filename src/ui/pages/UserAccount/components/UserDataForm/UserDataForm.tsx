import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { AxiosError } from 'axios';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

import { useAppSelector, useAppDispatch } from '../../../../../store';
import { userSliceActions } from '../../../../../store/slices/userSlice';
import validationDate from '../../../../../utils/validationSchemas';
import userApi from '../../../../../api/userApi';
import errorHandler from '../../../../../utils/errorHandler';

import mailImage from './images/mailInput.svg';
import userImage from './images/userInput.svg';

import StyledUserDataForm from './UserDataForm.style';

type PropType = {
  className?: string;
};

const UserDataForm: React.FC<PropType> = (props) => {
  const [formState, setFormState] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.userId);
  const fullName = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.fullName);
  const userEmail = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user!.email);

  const formik = useFormik({
    initialValues: {
      fullName: fullName || '',
      email: userEmail,
    },

    validationSchema: yup.object({
      fullName: validationDate.fullName,
      email: validationDate.email,
    }),

    onSubmit: async (values, actions) => {
      try {
        const { user, message } = await userApi.changeData(userId, values.fullName, values.email);
        dispatch(userSliceActions.setUser(user));
        toast.info(message);
        actions.resetForm({
          values: {
            fullName: user.fullName,
            email: user.email,
          },
        });
      } catch (error) {
        if (error instanceof AxiosError) {
          return actions.setErrors(errorHandler(error));
        }
      }
    },
  });

  return (
    <StyledUserDataForm
      className={props.className}
    >
      <div className="high-block">
        <h3>
          Personal information
        </h3>
        <button
          type="button"
          onClick={() => setFormState(!formState)}
        >
          Change information
        </button>
      </div>
      <form
        onSubmit={formik.handleSubmit}
      >
        <Input
          placeholder=""
          label="Your name"
          type="text"
          alt="human image"
          src={userImage}
          className="input-change__name"
          errorText={formik.errors.fullName}
          touchedInfo={formik.touched.fullName}
          {...formik.getFieldProps('fullName')}
        />
        <Input
          placeholder=""
          label="Your email"
          type="email"
          alt="envelope  image"
          className="input-change__email"
          errorText={formik.errors.email}
          touchedInfo={formik.touched.email}
          src={mailImage}
          {...formik.getFieldProps('email')}
        />
        {formState
          ? (
            <Button
              type="submit"
              className="confirm-button"
            // disabled={formik.isSubmitting}
            >
              Confirm
            </Button>) : null}
      </form>
    </StyledUserDataForm>
  );
};

export default UserDataForm;
