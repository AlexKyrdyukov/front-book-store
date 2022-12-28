import axiosInstance from './axios';

type UserType = {
  email: string;
  fullName: string;
  avatar: string;
};

const changeData = async (user: UserType) => {
  const response = await axiosInstance.patch<unknown>('/user/chage-data', user);
  return response.data;
};

const deleteUser = async (userId: number) => {
  const response = await axiosInstance.delete<unknown>(`/user/:${userId}`);
  return response.data;
};

const changePassword = async (userId: number, password: string, newPassword: string) => {
  const response = await axiosInstance.patch<unknown>(`/user/:${userId}/password`, { password, newPassword });
  return response.data;
};

export default {
  changeData,
  deleteUser,
  changePassword,
};
