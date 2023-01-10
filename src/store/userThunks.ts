import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import authApi from '../api/authApi';

const getUser = createAsyncThunk('getUser', async (_, { rejectWithValue }) => {
  try {
    const response = await authApi.getMe();
    return (response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    if (error instanceof AxiosError) {
      // eslint-disable-next-line max-len
      // throw rejectWithValue({ message: error.response?.data?.message, status: error.response?.status });
      throw rejectWithValue(error);
    }
  }
});

export default {
  getUser,
};
