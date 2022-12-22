import sharedValidation from './dataValidation';

const signUp = {
  email: sharedValidation.requiredEmail,
  password: sharedValidation.requiredPassword,
  repeatPassword: sharedValidation.repeatPassword,
};

const signIn = {
  email: sharedValidation.requiredEmail,
  password: sharedValidation.requiredPassword,
};

const updatedPass = {
  password: sharedValidation.requiredPassword,
  newPassword: sharedValidation.newPassword,
  repeatNewPassword: sharedValidation.repeatNewPassword,

};

const updatedInfo = {
  fullName: sharedValidation.fullName,
  email: sharedValidation.requiredEmail,
};

export default {
  signIn,
  signUp,
  updatedPass,
  updatedInfo,
};
