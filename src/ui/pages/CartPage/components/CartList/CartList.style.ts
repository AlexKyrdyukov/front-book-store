import styled from 'styled-components';

const StyledBookInCart = styled.div`
max-width: 1440px;

  .cart-list__total-price {
    padding-left: 60px;
    font-weight: 500;
    font-size: 36px;
    color: #0D1821;
    margin-bottom: 40px;
  }

  .cart-list__button-block {
    padding-left: 50px;
    margin-bottom: 50px;
  }

  .cart-list__link-shopping {
    margin-right: 40px;
  }

  .cart-list__button-shopping {
    padding: 10px 50px;
    background: white;
    color: #0D1821;
    border: 1px solid #344966;;
  }

  .cart-list__button-checkout {
    padding: 10px 50px;
    font-weight: 600;
    font-size: 16px;
    color: #F0F4EF;
  }
`;

export default StyledBookInCart;
