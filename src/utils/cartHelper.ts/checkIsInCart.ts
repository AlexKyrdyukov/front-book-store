import type { ProductType } from '../../api/cartApi';

const checkIsInCart = (bookId: number, cartProducts?: ProductType[]) => {
  if (cartProducts?.length) {
    const flag = cartProducts?.findIndex((item) => {
      return item.bookId === bookId;
    });
    return flag !== -1;
  }
  return false;
};

export default checkIsInCart;
