import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../types/userType';

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
  comments: CommentsType[];
};

export type CommentsType = {
  commentId: number;
  commentText: string;
  createdDate: string;
  user: UserType;
};

const booksStore: BookType[] = [];

const getInitialState = () => ({
  books: booksStore,
});

const bookSlice = createSlice({
  name: 'bookSlice',
  initialState: getInitialState,
  reducers: {
    setBooksState(state, action) {
      state.books = action.payload;
    },
    setNewRating(state, action: PayloadAction<{ newRating: string; bookId: number }>) {
      const index = state.books.findIndex((item) => item.bookId === action.payload.bookId);
      const book = state.books[index];
      const averageRating = Number(action.payload.newRating) * 10;
      book.averageRating = averageRating;
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
          state.books = action!.payload!.books;
        });
  },
});

export const bookSliceActions = bookSlice.actions;
export default bookSlice.reducer;
