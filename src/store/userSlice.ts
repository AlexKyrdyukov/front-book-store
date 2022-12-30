import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { UserType } from '../types/userType';

import userThunks from './userThunks';

const getInitialState = () => ({
  user: null as UserType | null,
});

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: getInitialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
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
