import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
import bookSlice from './slices/bookSlice';
import cartSlice from './slices/cartSlice';

const rootSlice = combineReducers({
  userSlice,
  bookSlice,
  cartSlice,
});

export default rootSlice;
