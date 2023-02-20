import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { ProductType } from '../../api/cartApi';
import type { UserType } from '../../types/userType';

import userThunks from '../thunks/userThunks';
import type { BookType } from './bookSlice';

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
      if (state.user) {
        state.user.avatar = action.payload;
      }
    },
    setCartBooks(state, action: PayloadAction<ProductType>) {
      if (state.user) {
        state.user.cartProducts = [...state.user.cartProducts, action.payload];
      }
    },
    setFavoriteBook(state, action: PayloadAction<{ favoriteBook: BookType}>) {
      if (state.user) {
        state.user.favoriteBooks = [...state.user.favoriteBooks, action.payload.favoriteBook];
      }
    },
    deleteFavoriteBook(state, action: PayloadAction<{ bookId: number}>) {
      if (state.user) {
        const bookId = action.payload.bookId;
        const index = state.user.favoriteBooks.findIndex((item) => item.bookId === bookId);
        state.user.favoriteBooks.splice(index, 1);
        state.user.favoriteBooks = [...state.user.favoriteBooks];
      }
    },
    changeCountBookInCart(state, action: PayloadAction<{ bookId: number; total: number }>) {
      // eslint-disable-next-line no-console
      console.log(action.payload);
      if (state.user) {
        const index = state.user?.cartProducts?.findIndex(
          (item) => +item.bookId === +action.payload.bookId,
        );
        if (index === -1) {
          return;
        }
        if (+action.payload.total <= 0) {
          state.user.cartProducts.splice(index, 1);
          state.user.cartProducts = [...state.user.cartProducts];
          return;
        }
        const book = state.user.cartProducts[index];
        book.countBook = action.payload.total;
      }
    },
    deleteCartBooks(state, action: PayloadAction<{ bookId: number }>) {
      if (state.user) {
        const index = state.user.cartProducts.findIndex(
          (item) => +item.bookId === +action.payload.bookId,
        );
        if (index === -1) {
          return;
        }
        state.user.cartProducts.splice(index, 1);
        state.user.cartProducts = [...state.user.cartProducts];
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
