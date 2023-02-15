import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { ProductType } from '../../api/cartApi';
import type { UserType } from '../../types/userType';

import userThunks from '../thunks/userThunks';

const getInitialState = () => ({
  user: null as UserType | null,
});

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: getInitialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
    setAvatar(state, action) {
      state.user!.avatar = action.payload;
    },
    setBooks(state, action: PayloadAction<ProductType[]>) {
      if (state.user) {
        state.user.cart.selectedProducts = action.payload;
      }
    },
    changeCount(state, action: PayloadAction<{ updatedData: ProductType }>) {
      if (state.user?.cart.selectedProducts) {
        const index = state.user?.cart.selectedProducts.findIndex(
          (item) => +item.bookId === +action.payload.updatedData.bookId,
        );
        if (index === -1) {
          return;
        }
        if (+action.payload.updatedData.countBook <= 0) {
          state.user?.cart.selectedProducts.splice(index, 1);
          state.user.cart.selectedProducts = [...state.user.cart.selectedProducts];
          return;
        }
        const book = state.user.cart.selectedProducts[index];
        book.countBook = action.payload.updatedData.countBook;
      }
    },
    deleteById(state, action: PayloadAction<{ updatedData: ProductType }>) {
      if (state.user) {
        const index = state.user.cart.selectedProducts.findIndex(
          (item) => +item.bookId === +action.payload.updatedData.bookId,
        );
        if (index === -1) {
          return;
        }
        state.user.cart.selectedProducts.splice(index, 1);
        state.user.cart.selectedProducts = [...state.user.cart.selectedProducts];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userThunks.getUser.fulfilled,
        (state, action) => {
          state.user = action.payload.user;
        });
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
