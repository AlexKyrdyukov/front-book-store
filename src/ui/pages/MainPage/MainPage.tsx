import React from 'react';

import HighBanner from '../components/HighBanner';
import Pagination from '../components/Pagination/Pagination';
import Catalog from '../components/Catalog/Catalog';
import LowBanner from '../components/LowBanner';
import StyledMainPage from './MainPage.style';

type PropsType = {
  value?: string;
};

const MainPage: React.FC<PropsType> = () => {
  return (
    <StyledMainPage>
      <HighBanner />
      <Catalog />
      <Pagination />
      <LowBanner />
    </StyledMainPage>
  );
};

export default MainPage;
