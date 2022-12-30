import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './userSlice';

const rootSlice = combineReducers({
  userSlice,
});

export default rootSlice;
