import { userSliceActions } from '../../store/slices/userSlice';
import { cartApi } from '../../api';
import { store } from '../../store';

const deleteById = async (bookId: number) => {
  try {
    await cartApi.deleteById(bookId);
    store.dispatch(userSliceActions.deleteCartBooks({ bookId }));
  } catch (error) {
    console.error(error);
  }
};

export default deleteById;
