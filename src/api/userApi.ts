import type { AxiosError, AxiosResponse } from 'axios';

import axiosInstance from './axios';

type UserType = {
  id: number;
  email: string;
  fullName: string;
  avatar: string;
};

const changeData = async (userId: number | undefined, fullName: string, email: string) => {
  const response = await axiosInstance.patch<{ user: UserType }>(`/user/${userId}`, { fullName, email });
  return response.data;
};

const deleteUser = async (userId: number | undefined) => {
  const response = await axiosInstance.delete<AxiosResponse | AxiosError>(`/user/${userId}`);
  return response.data;
};

const changePassword = async (
  userId: number | undefined, password: string, newPassword: string,
) => {
  const response = await axiosInstance.patch<AxiosResponse | AxiosError>(`/user/${userId}/password`, { password, newPassword });
  return response.data;
};

const setAvatar = async (userId: number | undefined, file: string | ArrayBuffer | null) => {
  const response = await axiosInstance.post<UserType['avatar']>(`user/${userId}/avatar`, { file });
  return response.data;
};

export default {
  changeData,
  deleteUser,
  changePassword,
  setAvatar,
};
