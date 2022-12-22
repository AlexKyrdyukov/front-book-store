import * as yup from 'yup';

const userId = yup.number().integer().positive();
const requiredUserId = userId.required();

const fullName = yup.string()
  .trim()
  .min(2, 'please enter correctly name & last name')
  .max(40, 'please enter correctly name & last name');
const requiredFullName = fullName.required('field fullname is required');

const email = yup.string()
  .trim()
  .lowercase()
  .email('please enter valid email');
const requiredEmail = email.required('field email is required');

const dob = yup.date();
const requiredDob = dob.required('this field is required, example enter: YYYY-DD-MM ');

const password = yup.string()
  .trim()
  .min(3, 'password cannot be shorter than 3 characters')
  .max(8, 'password cannot be longer than 8 character');
const requiredPassword = password.required('field password is required');

const repeatPassword = yup.string()
  .oneOf([yup.ref('requiredPassword')], 'entered password must be the same')
  .required();

const newPassword = yup.string()
  .trim()
  .required('field password is required')
  .min(3, 'password cannot be shorter than 3 characters')
  .max(8, 'password cannot be longer than 8 character');

const repeatNewPassword = yup.string()
  .oneOf([yup.ref('newPassword')], 'entered password must be the same')
  .required();

export default {
  userId,
  fullName,
  email,
  dob,
  password,
  repeatPassword,
  requiredPassword,
  repeatNewPassword,
  newPassword,
  requiredDob,
  requiredEmail,
  requiredFullName,
  requiredUserId,
};
