import styled from 'styled-components';

const StyledBookInCart = styled.div`
  max-width: 600px;
  margin-bottom: 40px;
  display: flex;
  padding: 40px;

  & img {
    margin-right: 20px;
  }

  .cart-book__name {
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 40px;

  }

  .cart-book__author {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 40px;
  }

  .cart-book__button-block {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
  }

  .cart-book__button-minus {
    background: #F0F4EF;
    padding: 0px 20px;
    border-radius: 50px;
    font-size: 24px;
  }

  .cart-book__total-count {
    padding: 10px;
    font-size: 24px;
  }

  .cart-book__button-plus {
    font-size: 24px;
    background: #F0F4EF;
    padding: 0px 20px;
    border-radius: 50px;
  }

  .cart-book__button-delete {
    background: #F0F4EF;
    padding: 10px;
    border-radius: 50px;
    font-size: 24px;
  }

  .cart-book__book-price {
    font-weight: 500;
    font-size: 36px;
    color: #0D1821;
  }
`;

export default StyledBookInCart;
