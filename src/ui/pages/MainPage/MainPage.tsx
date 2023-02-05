import React from 'react';

import { useAppSelector } from '../../../store';

const HighBanner = React.lazy(() => import('./components/HighBanner'));
const Catalog = React.lazy(() => import('./components/Catalog/Catalog'));
const LowBanner = React.lazy(() => import('../components/LowBanner'));
const StyledMainPage = React.lazy(() => import('./MainPage.style'));

const MainPage: React.FC = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  return (
    <StyledMainPage>
      <HighBanner />
      <Catalog />
      {!user && <LowBanner />}
    </StyledMainPage>
  );
};

export default MainPage;
