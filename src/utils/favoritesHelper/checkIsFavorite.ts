import type { BookType } from '../../store/slices/bookSlice';

const handleIsFavorite = ((bookId: number, favoritesBooks?: BookType[]) => {
  if (favoritesBooks?.length) {
    const flag = favoritesBooks.findIndex((item) => {
      return item.bookId === bookId;
    });
    return flag !== -1;
  }
  return false;
});

export default handleIsFavorite;
