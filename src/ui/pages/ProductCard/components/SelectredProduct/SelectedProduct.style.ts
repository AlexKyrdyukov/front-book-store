import styled from 'styled-components';

const StyledSelectedProduct = styled.section`
  max-width: 1440px;
  margin: 0px auto;
  padding-left: 80px;
  padding-right: 80px;

  .product__button {
    background: #344966;
  }
  
  .product__image-block {
    width: 522px;
    height: 779px;
  }

  .product__image {
    width: 100%;
    height: 100%;
  }

  .product__text-block {
    max-width: 630px;
  }

  .product__text-block h3 {
    font-weight: 700;
    font-size: 40px;
    color: #0D1821;
  }

  .product__text-block h5 {
    font-weight: 500;
    font-size: 24px;
    color: #0D1821;
  }

  .product__description-block h4 {
    font-weight: 500;
    font-size: 24px;
    color: #0D1821;
  }

  .product__description-block p {
    font-weight: 500;
    font-size: 16px;
    color: #344966;
  }

`;

export default StyledSelectedProduct;
