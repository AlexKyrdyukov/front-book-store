import React from 'react';

import CircleButton from '../../../../components/CircleButton/CircleButton';

import pseudoPhoto from './images/user.svg';
import camera from './images/camera.png';

import StyledAvatar from './UserAvatar.style';

const UserAvatar: React.FC = () => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files[0];
    // eslint-disable-next-line no-console
    console.log(event.target.value);
  };

  return (
    <StyledAvatar>
      <div className="block__user-photo">
        <picture>
          <source className="books" media="(min-width: 1440px)" srcSet={pseudoPhoto} />
          <source className="books" media="(min-width: 834px)" srcSet={pseudoPhoto} />
          <img className="books" src={pseudoPhoto} alt="Flowers" />
        </picture>
        <div className="input__block">
          <form action="">
            <CircleButton
              type="button"
              src={camera}
            />
            <input
              className="input__file"
              accept="image/*"
              type="file"
              onChange={changeHandler}
            />
          </form>
        </div>
      </div>
    </StyledAvatar>
  );
};

export default UserAvatar;
