import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { BookType } from './bookSlice';

const BooksStore: BookType[] = [];

const getInitialState = () => ({
  books: BooksStore,
});

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: getInitialState,
  reducers: {
    getBook(state, action: PayloadAction<BookType[]>) {
      // eslint-disable-next-line no-console
      console.log(state.books, action.payload);
      // state.book = action.payload;
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
