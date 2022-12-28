import { createSlice } from '@reduxjs/toolkit';

import type { UserType } from '../types/userType';

import Cookies from '../coookieHelper/CookieStorage';
import userThunks from './userThunks';

const getInitialState = () => ({
  user: null as UserType | null,
});

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: getInitialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(userThunks.getUser.fulfilled,
        (state, action) => {
          state.user = action.payload.user;
        });
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
