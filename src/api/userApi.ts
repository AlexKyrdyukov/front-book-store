import axiosInstance from './axios';

type UserType = {
  email: string;
  fullName: string;
  avatar: string;
};

const changeData = async (userId: number | undefined, fullName: string, email: string) => {
  const response = await axiosInstance.patch<{ user: UserType }>(`/user/${userId}`, { fullName, email });
  return response.data;
};

const deleteUser = async (userId: number | undefined) => {
  const response = await axiosInstance.delete<unknown>(`/user/${userId}`);
  return response.data;
};

const changePassword = async (
  userId: number | undefined, password: string, newPassword: string,
) => {
  const response = await axiosInstance.patch<unknown>(`/user/${userId}/password`, { password, newPassword });
  return response.data;
};

export default {
  changeData,
  deleteUser,
  changePassword,
};
