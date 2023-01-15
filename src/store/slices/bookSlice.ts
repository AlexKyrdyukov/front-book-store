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
    setBooksState(state, action) {
      state.books = action.payload;
    },
    changeBookDarling(state, action) {
      const book = state.books.findIndex(
        (item) => item.id === action.payload,
      );
      state.books[book].darling =
        !state.books[book].darling;
    },
  },
});

export const bookSliceActions = bookSlice.actions;
export default bookSlice.reducer;
