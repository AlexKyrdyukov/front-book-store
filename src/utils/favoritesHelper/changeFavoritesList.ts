import { userSliceActions } from '../../store/slices/userSlice';
import { favoritesApi } from '../../api';
import { store } from '../../store';

type ParamsType = {
  isFavorite: boolean;
  bookId: number;
};

const changeFavorites = (async (params: ParamsType) => {
  const { isFavorite, bookId } = params;
  try {
    if (!isFavorite) {
      const response = await favoritesApi.addById(bookId);
      store.dispatch(userSliceActions.setFavoriteBook(response));
      return;
    }
    await favoritesApi.deleteById(bookId);
    store.dispatch(userSliceActions.deleteFavoriteBook({ bookId }));
  } catch (error) {
    console.error(error);
  }
});

export default changeFavorites;
