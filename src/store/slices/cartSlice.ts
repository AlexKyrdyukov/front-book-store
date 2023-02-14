import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { CartType, ProductType } from '../../api/cartApi';

const getInitialState = () => ({
  cartBooks: null as CartType | null,
});

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: getInitialState,
  reducers: {
    setBooks(state, action: PayloadAction<CartType>) {
      state.cartBooks = action.payload;
    },
    changeCount(state, action: PayloadAction<{ updatedData: ProductType }>) {
      if (state.cartBooks) {
        const index = state.cartBooks.selectedProducts.findIndex(
          (item) => +item.bookId === +action.payload.updatedData.bookId,
        );
        if (index === -1) {
          return;
        }
        if (+action.payload.updatedData.countBook <= 0) {
          state.cartBooks.selectedProducts.splice(index, 1);
          state.cartBooks.selectedProducts = [...state.cartBooks.selectedProducts];
          return;
        }
        const book = state.cartBooks?.selectedProducts[index];
        book.countBook = action.payload.updatedData.countBook;
      }
    },
    deleteById(state, action: PayloadAction<{ updatedData: ProductType }>) {
      if (state.cartBooks) {
        const index = state.cartBooks.selectedProducts.findIndex(
          (item) => +item.bookId === +action.payload.updatedData.bookId,
        );
        if (index === -1) {
          return;
        }
        state.cartBooks.selectedProducts.splice(index, 1);
        state.cartBooks.selectedProducts = [...state.cartBooks.selectedProducts];
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
