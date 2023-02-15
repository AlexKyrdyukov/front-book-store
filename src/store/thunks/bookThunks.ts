import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { bookApi } from '../../api';

const getBooks = createAsyncThunk('getBooks', async (params: object, { rejectWithValue }) => {
  try {
    const response = await bookApi.filtered(params);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw rejectWithValue(error);
    }
    console.error(error);
  }
});

export default {
  getBooks,
};
