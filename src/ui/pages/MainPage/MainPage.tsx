import React from 'react';

import { StyledMainPage } from './MainPage.style';
import HighBanner from '../../components/HighBanner';
import Pagination from '../../components/Pagination';
import Catalog from '../../components/Catalog';
import LowBanner from '../../components/LowBanner';

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
