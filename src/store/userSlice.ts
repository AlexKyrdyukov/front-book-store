import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  UserType,
  SignUpPostType,
  GetUserType,
} from '../types/userType';

import Cookies from '../coookieHelper/CookieStorage';
import userThunks from './userThunks';

const user: UserType = {
};
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
      // eslint-disable-next-line max-len
      .addCase(userThunks.createUser.fulfilled, (state, action: PayloadAction<SignUpPostType | undefined>) => {
        if (action.payload) {
          const { token, user } = action.payload;
          Cookies.token.set(token);
          state.user = user;
        }
      })
      .addCase(userThunks.getUser.fulfilled, (state, action: PayloadAction<GetUserType>) => {
        state.user = action.payload?.user;
      });
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
