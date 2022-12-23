import { createAsyncThunk } from '@reduxjs/toolkit';
import type { SignUpType } from '../types/userType';
import axiosInstance from '../api/axios';

const createUser = createAsyncThunk('createUser', async (user: SignUpType) => {
  const response = await axiosInstance.post<SignUpType>('/auth/sign-up', user);
  return response.data;
});

export default {
  createUser,
};
