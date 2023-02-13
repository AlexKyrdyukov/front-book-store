import { createSlice } from '@reduxjs/toolkit';

import bookThunks from '../thunks/bookThunks';

export type BookType = {
  author: string;
  bestSeller: boolean;
  bookId: number;
  coverType: string[];
  description: string;
  image: string;
  isInStock: boolean;
  name: string;
  new: boolean;
  priceInDollar: number;
  averageRating: number;
  darling: boolean;
};

const booksStore: BookType[] = [];

const getInitialState = () => ({
  books: booksStore,
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
