import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import bookThunks from '../thunks/bookThunks';

export type BookType = {
  bookId: number;
  name: string;
  author: string;
  darling?: boolean;
  raiting: number;
  annotation: string | null;
  price: number;
  inBasket?: boolean;
  image: string;
  coverType: string;
  description: string;
  isAvailable: boolean;
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
      const book = state!.books!.findIndex(
        (item) => item.bookId === action.payload,
      );
      state.books[book].darling =
        !state.books[book].darling;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookThunks.getBooks.fulfilled,
        (state, action) => {
          // eslint-disable-next-line no-console
          console.log(action.payload);
          state.books = action!.payload!.books;
        });
  },
});

export const bookSliceActions = bookSlice.actions;
export default bookSlice.reducer;
