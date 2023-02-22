import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { BookType } from './bookSlice';

const favoriteBooks: BookType[] = [];

const getInitialState = () => ({
  favoriteBooks,
});

const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState: getInitialState,
  reducers: {
    setAllBooks(state, action: PayloadAction<BookType[]>) {
      state.favoriteBooks = action.payload;
    },
    removeAllBooks(state) {
      state.favoriteBooks = [];
    },
    setFavoriteBook(state, action: PayloadAction<{ favoriteBook: BookType }>) {
      if (state.favoriteBooks) {
        state.favoriteBooks = [...state.favoriteBooks, action.payload.favoriteBook];
      }
    },
    deleteFavoriteBook(state, action: PayloadAction<{ bookId: number }>) {
      if (state.favoriteBooks) {
        const bookId = action.payload.bookId;
        const index = state.favoriteBooks.findIndex((item) => item.bookId === bookId);
        state.favoriteBooks.splice(index, 1);
        state.favoriteBooks = [...state.favoriteBooks];
      }
    },
  },
});

export const favoriteSliceActions = favoriteSlice.actions;
export default favoriteSlice.reducer;
