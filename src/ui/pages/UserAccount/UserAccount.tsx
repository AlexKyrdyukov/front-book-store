import React from 'react';

import UserAvatar from './components/UserAvatar';
import UserChangeData from './components/UserDataForm';
import UserChangePassword from './components/UserPasswordForm';

import StyledUserAccount from './UserAccount.style';

type PropsType = {
  value?: string | undefined;
};

const UserAccount: React.FC<PropsType> = () => {
  return (
    <StyledUserAccount>
     <UserAvatar />
     <UserChangeData />
     <UserChangePassword />
    </StyledUserAccount>
  );
};

export default UserAccount;
