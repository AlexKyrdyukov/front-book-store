import * as yup from 'yup';

import sharedValidation from './dataValidation';

const signUp = yup.object().shape({
  email: sharedValidation.requiredEmail,
  password: sharedValidation.requiredPassword,
  confirmPassword: sharedValidation.confirmPassword,
});

const signIn = yup.object().shape({
  email: sharedValidation.requiredEmail,
  password: sharedValidation.requiredPassword,
});

const updatedPass = yup.object().shape({
  password: sharedValidation.requiredPassword,
  newPassword: sharedValidation.newPassword,
  confirmNewPassword: sharedValidation.confirmNewPassword,

});

const updatedInfo = yup.object().shape({
  fullName: sharedValidation.fullName,
  email: sharedValidation.requiredEmail,
});

export default {
  signIn,
  signUp,
  updatedPass,
  updatedInfo,
};
