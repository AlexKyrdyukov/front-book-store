import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './userSlice';
import bookSlice from './bookSlice';

const rootSlice = combineReducers({
  userSlice,
  bookSlice,
});

export default rootSlice;
