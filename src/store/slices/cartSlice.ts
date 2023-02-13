import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { CartType } from '../../api/cartApi';

const getInitialState = () => ({
  cartBooks: null as CartType | null,
});

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: getInitialState,
  reducers: {
    setBook(state, action: PayloadAction<CartType>) {
      // eslint-disable-next-line no-console
      console.log(state.cartBooks, action.payload);
      state.cartBooks = action.payload;
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
