import styled from 'styled-components';

const StyledPagination = styled.div`
  /* width: 470px; */
  margin: 40px auto;
  margin-bottom: 90px;
  
  .pagination__button-block {
    display: flex;
    justify-content: center;
  }

  .pagination__button-block button {
    display: flex;
    align-items: center;
    background: white;
  }

  .pagination__button-next{

  }

  .pagination__button-circle{
    margin: 0px 20px;
  }
`;

export default StyledPagination;
