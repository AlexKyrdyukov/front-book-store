import React from 'react';

import { StyledMainPage } from './MainPage.style';
import TopBanner from '../../components/TopBanner';

type PropsType = {
  value?: string;
};

const MainPage: React.FC<PropsType> = () => {
  // const user = useAppSelector(({ user }) => user);

  return (
    <StyledMainPage>
      <TopBanner />
    </StyledMainPage>
  );
};

export default MainPage;
