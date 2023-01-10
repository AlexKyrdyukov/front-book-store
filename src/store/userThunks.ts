import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import authApi from '../api/authApi';

const getUser = createAsyncThunk('getUser', async (_, { rejectWithValue }) => {
  try {
    const response = await authApi.getMe();
    return (response);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw rejectWithValue(error);
    }
    console.error(error);
  }
});

export default {
  getUser,
};
