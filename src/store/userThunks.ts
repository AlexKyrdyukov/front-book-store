import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import authApi from '../api/authApi';

const getUser = createAsyncThunk('getUser', async () => {
  const response = await authApi.getMe();
  return response.data;
});

export default {
  getUser,
};
