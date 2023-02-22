import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
import bookSlice from './slices/bookSlice';
import cartSlice from './slices/cartSlice';
import favoriteSlice from './slices/favoriteSlice';

const rootSlice = combineReducers({
  userSlice,
  bookSlice,
  cartSlice,
  favoriteSlice,
});

export default rootSlice;
