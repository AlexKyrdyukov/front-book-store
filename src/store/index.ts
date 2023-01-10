import { useDispatch, useSelector } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import type { TypedUseSelectorHook } from 'react-redux';

import rootSlice from './rootSlice';

export const store = configureStore({
  reducer: {
    rootSlice,
  },
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppStateType = typeof store.getState;
export type RootStateType = ReturnType<AppStateType>;
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
