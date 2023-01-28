import axiosInstance from './axios';

import type { UserType } from '../types/userType';

type AuthType = {
  email: string;
  password: string;
};

const signUp = async (user: AuthType) => {
  const response = await axiosInstance.post<{ accessToken: string; refreshToken: string; user: UserType; message: string }>('/auth/sign-up', user);
  return response.data;
};

const signIn = async (user: AuthType) => {
  const response = await axiosInstance.post<{ accessToken: string; refreshToken: string; user: UserType }>('/auth/sign-in', user);
  return response.data;
};

const getMe = async () => {
  const response = await axiosInstance.get('/auth/me');
  return response.data || null;
};

const refresh = async () => {
  const response = await axiosInstance.post<{ accessToken: string; refreshToken: string }>('/auth/refresh');
  return response.data;
};

export default {
  signIn,
  signUp,
  getMe,
  refresh,
};
