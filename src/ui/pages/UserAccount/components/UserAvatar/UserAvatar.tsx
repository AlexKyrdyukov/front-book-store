import React from 'react';

import CircleButton from '../../../../components/CircleButton/CircleButton';
import { useAppSelector } from '../../../../../store';

import pseudoPhoto from './images/user.svg';
import camera from './images/camera.png';

import StyledAvatar from './UserAvatar.style';

type PropsType = {
  className?: string;
};

const UserAvatar: React.FC<PropsType> = (props) => {
  const avatar = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.avatar);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    if (file) {
      // eslint-disable-next-line no-console
      console.log(file[0].name);
      return file[0].name;
    }
  };

  return (
    <StyledAvatar className={props.className}>
      <div className="block__user-photo">
        <img className="user-photo" src={avatar || pseudoPhoto} alt="plug" />
      </div>
      <div className="input__block">
        <form action="#">
          <CircleButton
            className="circle__button"
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
    </StyledAvatar>
  );
};

export default UserAvatar;
