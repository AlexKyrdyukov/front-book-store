import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
import bookSlice from './slices/bookSlice';

const rootSlice = combineReducers({
  userSlice,
  bookSlice,
});

export default rootSlice;
