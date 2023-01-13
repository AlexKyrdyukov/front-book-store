import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type BookType = {
  id: number;
  name?: string;
  author?: string;
  darling?: boolean;
  raiting?: number;
  annotation?: string;
  price?: string;
  inBasket?: boolean;
  src?: string;
};

const BooksStore: BookType[] = [];

const getInitialState = () => ({
  books: BooksStore,
});

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState: getInitialState,
  reducers: {
    getBook(state, action: PayloadAction<BookType[]>) {
      // eslint-disable-next-line no-console
      console.log(state.books, action.payload);
      // state.book = action.payload;
    },
  },
});

export const bookSliceActions = bookSlice.actions;
export default bookSlice.reducer;
