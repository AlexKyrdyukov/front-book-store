import styled from 'styled-components';

const StyledEmptyCart = styled.main`
  padding-top: 94px;
  max-width: 1170px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 160px;


  .empty-cart__button {
    padding: 10px 50px;
    font-weight: 500;
    font-size: 16px;
  }

  .empty-cart__block-image{
    max-width: 433px;
    max-height: 261px;
    margin-right: 10px;
  }

  .empty-cart__image {
    width: 100%;
    height: 100%;
  }

  .empty-cart__text-block h3 {
    font-weight: 700;
    font-size: 40px;
    color: #0D1821;
    margin-bottom: 20px;
  }

  .empty-cart__text-block p {
    max-width: 465px;
    font-weight: 500;
    font-size: 24px;
    color: #344966;
    margin-bottom: 60px;
    line-height: 36px;
  }

  @media (max-width: 1028px) {
    padding-right: 40px;
    padding-left: 40px;
  }

  @media (max-width: 834px) {
    padding-right: 15px;
    padding-left: 15px;
    
    .empty-cart__text-block h3 {
      font-size: 32px;
    }

    .empty-cart__text-block p {
      font-size: 16px;
      line-height: 24px;
      max-width: 310px;
    }

    .empty-cart__block-image{
      max-width: 350px;
      max-height: 212px;
    }

    .empty-cart__text-block{
      margin-right: 40px;
    }
  }

  @media (max-width: 750px) {
    .empty-cart__text-block{
      margin-right: 0px;
    }
  }

  @media (max-width: 655px) {
    flex-direction: column-reverse;
    align-items: center;
    padding-top:50px;
    padding-bottom:100px;



    .empty-cart__button {
      padding: 10px 100px;
    }

    .empty-cart__text-block h3 {
    }

    .empty-cart__text-block p {
      max-width: none;

    }

    .empty-cart__block-image{
      margin-right: 0px;
    }

    .empty-cart__text-block {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 400px) {
    .empty-cart__text-block h3 {
      font-size: 18px;
    }

    .empty-cart__text-block p {
      font-size: 12px;
    }

    .empty-cart__button {
      padding: 10px 90px;
    }

  }
`;

export default StyledEmptyCart;
