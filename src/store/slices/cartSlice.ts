import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { BookType } from './bookSlice';

const CartType: BookType[] = [];

const getInitialState = () => ({
  cartBooks: CartType,
});

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: getInitialState,
  reducers: {
    setBook(state, action: PayloadAction<BookType[]>) {
      // eslint-disable-next-line no-console
      console.log(state.cartBooks, action.payload);
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
