import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ProductType } from '../../api/cartApi';

const cartBooks: ProductType[] = [];

const getInitialState = () => ({
  cartBooks,
});

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: getInitialState,
  reducers: {
    setAllBooks(state, action: PayloadAction<ProductType[]>) {
      state.cartBooks = action.payload;
    },
    removeAllBooks(state) {
      state.cartBooks = [];
    },
    setCartBook(state, action: PayloadAction<ProductType>) {
      if (state.cartBooks) {
        state.cartBooks = [...state.cartBooks, action.payload];
      }
    },
    changeCountBookInCart(state, action: PayloadAction<{ bookId: number; total: number }>) {
      if (state.cartBooks) {
        const index = state.cartBooks.findIndex(
          (item) => +item.bookId === +action.payload.bookId,
        );
        if (index === -1) {
          return;
        }
        if (+action.payload.total <= 0) {
          state.cartBooks.splice(index, 1);
          state.cartBooks = [...state.cartBooks];
          return;
        }
        const book = state.cartBooks[index];
        book.countBook = action.payload.total;
      }
    },
    deleteCartBooks(state, action: PayloadAction<{ bookId: number }>) {
      if (state.cartBooks) {
        const index = state.cartBooks.findIndex(
          (item) => +item.bookId === +action.payload.bookId,
        );
        if (index === -1) {
          return;
        }
        state.cartBooks.splice(index, 1);
        state.cartBooks = [...state.cartBooks];
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
