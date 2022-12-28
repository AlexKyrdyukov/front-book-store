import axiosInstance from './axios';

import type { UserType } from '../types/userType';

type AuthType = {
  email: string;
  password: string;
};

const signUp = async (user: AuthType) => {
  const response = await axiosInstance.post<{token: string}>('/auth/sign-up', user);
  return response.data;
};

const signIn = async (user: AuthType) => {
  const response = await axiosInstance.post<{token: string}>('/auth/sign-in', user);
  return response.data;
};

const getMe = async () => {
  const response = await axiosInstance.get<{user: UserType}>('/auth/me');
  return response;
};

export default {
  signIn,
  signUp,
  getMe,
};