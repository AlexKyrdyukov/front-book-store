import React from 'react';

import UserAvatar from './components/UserAvatar';
import UserChangeData from './components/UserDataForm';
import UserChangePassword from './components/UserPasswordForm';

import StyledUserAccount from './UserAccount.style';

const UserAccount: React.FC = () => {
  return (
    <StyledUserAccount>
      <UserAvatar
        className="user__avatar-block"
      />
      <div className="change-data-block">
        <UserChangeData
          className="user__data-block"
        />
        <UserChangePassword
          className="user__password-block"
        />
      </div>
    </StyledUserAccount>
  );
};

export default UserAccount;
