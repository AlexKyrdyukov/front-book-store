import { toast } from 'react-toastify';
import type { FormikErrors } from 'formik';
import type { AxiosError } from 'axios';

import { userSliceActions } from '../../store/slices/userSlice';
import { store } from '../../store';

type ErrorType = {
  path: string;
  message: string;
  key: string;
};

type CustomErrorType = {
  errors: ErrorType[];
  message: string;
};

const errorHandler = (error: AxiosError<CustomErrorType>) => {
  const errors: FormikErrors<{ [index: string]: string }> = {};

  if (!error.response?.status) {
    toast.error('error server connection');
  }
  if (error.response?.status) {
    toast.error(error.response?.data?.message);
  }
  if (error.response?.data?.message === 'please log in') {
    store.dispatch(userSliceActions.removeUser());
  }
  console.error(error);

  if (error.response?.data?.errors) {
    error.response.data.errors.forEach((item: ErrorType) => {
      errors[item.key] = item.message;
    });
  }
  return errors;
};

export default errorHandler;
