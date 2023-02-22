import { cartSliceActions } from '../../store/slices/cartSlice';
import { cartApi } from '../../api';
import { store } from '../../store';

const changeTotalCount = async (bookId: number, total: number) => {
  try {
    await cartApi.changeQuantity(bookId, total);
    store.dispatch(cartSliceActions.changeCountBookInCart({ bookId, total }));
  } catch (error) {
    console.error(error);
  }
};

export default changeTotalCount;
