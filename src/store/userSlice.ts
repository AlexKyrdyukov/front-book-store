import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserType } from '../types/userType';

import userThunk from './userThunks';

const user: UserType = {};
const initialState = {
  user,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(userThunk.createUser.fulfilled, (state, action: PayloadAction<UserType>) => {
        const fullName = action.payload;
        // eslint-disable-next-line no-console
        console.log(fullName);
      });
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
