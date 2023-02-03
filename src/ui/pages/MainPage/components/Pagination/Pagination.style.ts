import styled from 'styled-components';

const StyledPagination = styled.div`
  width: 270px;
  margin: 40px auto;
  margin-bottom: 90px;
  
  .pagination__button-block {
    display: flex;
    justify-content: space-between;
  }

  .pagination__button-block button {
    display: flex;
    align-items: center;
  }
`;

export default StyledPagination;
