import React from 'react';

const HighBanner = React.lazy(() => import('./components/HighBanner'));
const Pagination = React.lazy(() => import('./components/Pagination/Pagination'));
const Catalog = React.lazy(() => import('./components/Catalog/Catalog'));
const LowBanner = React.lazy(() => import('./components/LowBanner'));
const StyledMainPage = React.lazy(() => import('./MainPage.style'));

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
