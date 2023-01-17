import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import bookApi from '../../api/bookApi';

const getBooks = createAsyncThunk('getBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await bookApi.getAll();
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
