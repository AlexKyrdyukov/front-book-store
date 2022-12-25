import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import type { SignUpType, SignUpPostType } from '../types/userType';
import axiosInstance from '../api/axios';

const createUser = createAsyncThunk('createUser', async (user: SignUpType, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<SignUpPostType>('/auth/sign-up', user);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data);
    }
    throw error;
  }
});

const getUser = createAsyncThunk('getUser', async () => {
  try {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export default {
  createUser,
  getUser,
};
