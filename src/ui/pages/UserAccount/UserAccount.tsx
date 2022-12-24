import React from 'react';
import { StyledUserAccount } from './UserAccount.style';

type PropsType = {
  value?: string | undefined;
};

const UserAccount: React.FC<PropsType> = (props) => {
  return (
    <StyledUserAccount>
      <div
        className="page__wrapper"
      >
        <div
          className="block__user-photo"
        >
          <img
            className="user-photo"
            src=""
            alt="user photo"
          />
        </div>
        <div className="block__user-info">
          <h3>
            Personal information
          </h3>
          <form action="">
            <button>
              Change information
            </button>
          </form>
        </div>
      </div>
    </StyledUserAccount>
  );
};

export default UserAccount;
