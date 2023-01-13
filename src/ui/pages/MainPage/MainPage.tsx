import React from 'react';

import { useAppSelector } from '../../../store';

const HighBanner = React.lazy(() => import('./components/HighBanner'));
const Pagination = React.lazy(() => import('./components/Pagination'));
const Catalog = React.lazy(() => import('./components/Catalog/Catalog'));
const LowBanner = React.lazy(() => import('../components/LowBanner'));
const StyledMainPage = React.lazy(() => import('./MainPage.style'));

const MainPage: React.FC = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  return (
    <StyledMainPage>
      <HighBanner />
      <Catalog />
      <Pagination />
      {!user && <LowBanner />}
    </StyledMainPage>
  );
};

export default MainPage;
