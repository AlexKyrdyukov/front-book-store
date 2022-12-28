import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';

import pseudoPhoto from './images/user.svg';
import StyledUserAccount from './UserAccount.style';

type PropsType = {
  value?: string | undefined;
};

const UserAccount: React.FC<PropsType> = () => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    // eslint-disable-next-line no-console
    console.log(file);
  };

  return (
    <StyledUserAccount>
      <div
        className="page__wrapper"
      >
        <div
          className="block__user-photo"
        >
          <picture>
            <source className="books" media="(min-width: 1440px)" srcSet={pseudoPhoto} />
            <source className="books" media="(min-width: 834px)" srcSet={pseudoPhoto} />
            <img className="books" src={pseudoPhoto} alt="Flowers" />
          </picture>
          <span>
            <CircleButton>
              <input
                accept="image/*"
                type="file"
                onChange={changeHandler}
              />
            </CircleButton>
          </span>
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
