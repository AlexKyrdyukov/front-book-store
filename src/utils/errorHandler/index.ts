import { toast } from 'react-toastify';
import type { FormikErrors } from 'formik';
import type { AxiosError } from 'axios';

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
  const obj: FormikErrors<{ [index: string]: string }> = {};

  if (!error.response?.status) {
    toast('error server connection');
  }
  if (error.response?.status) {
    toast(error.response?.data?.message);
  }
  if (error.response?.data?.errors) {
    error.response.data.errors.forEach((item: ErrorType) => {
      obj[item.key] = item.message;
    });
  }
  return obj;
};

export default errorHandler;
