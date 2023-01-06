import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type BookType = {
  name: string;
  author: string;
  price: string;
  cover: string;
};

const getInitialState = () => ({
  book: null as BookType | null,
});

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState: getInitialState,
  reducers: {
    setUser(state, action: PayloadAction<BookType>) {
      state.book = action.payload;
    },
  },
});

export const bookSliceActions = bookSlice.actions;
export default bookSlice.reducer;
