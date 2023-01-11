import styled from 'styled-components';
import StyledInput from '../../components/Input/Input.style';

const StyledNavigation = styled.main`
  min-height: calc(100vh - 445px);

  @media (max-width: 553px)  { 
    min-height: auto;
  }

`;

export default StyledNavigation;
