import { cartApi } from '../../api';
import { store } from '../../store';
import { cartSliceActions } from '../../store/slices/cartSlice';

const deleteById = async (bookId: number) => {
  try {
    await cartApi.deleteById(bookId);
    store.dispatch(cartSliceActions.deleteCartBooks({ bookId }));
  } catch (error) {
    console.error(error);
  }
};

export default deleteById;
