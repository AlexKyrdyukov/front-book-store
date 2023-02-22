import { AxiosError } from 'axios';
import { cartSliceActions } from '../../store/slices/cartSlice';
import { cartApi } from '../../api';
import errorHandler from '../errorHandler';
import { store } from '../../store';

const addById = async (bookId: number) => {
  try {
    const response = await cartApi.addById(bookId);
    store.dispatch(cartSliceActions.setCartBook(response.cartProduct));
  } catch (error) {
    if (error instanceof AxiosError) {
      errorHandler(error);
    }
    console.error(error);
  }
};

export default addById;
