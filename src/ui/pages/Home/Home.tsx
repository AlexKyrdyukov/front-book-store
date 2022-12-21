import React from 'react';
import { StyledHomePage } from './Home.style';

type PropsType = {
  value?: string;
};

const Home: React.FC<PropsType> = () => {
  return (
    <StyledHomePage>
      Home
    </StyledHomePage>
  );
};

export default Home;
