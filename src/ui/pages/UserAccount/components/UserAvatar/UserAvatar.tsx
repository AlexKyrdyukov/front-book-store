import React from 'react';
import { AxiosError } from 'axios';

import CircleButton from '../../../../components/CircleButton/CircleButton';
import { useAppSelector } from '../../../../../store';
import userApi from '../../../../../api/userApi';

import pseudoPhoto from './images/user.svg';
import camera from './images/camera.png';

import StyledAvatar from './UserAvatar.style';
import errorHandler from '../../../../../utils/errorHandler';

type PropsType = {
  className?: string;
};

const UserAvatar: React.FC<PropsType> = (props) => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    if (!file![0]) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file![0]);
    reader.onloadend = async () => {
      try {
        await userApi.setAvatar(user?.id, reader.result);
        // eslint-disable-next-line no-console
        console.log('event');
      } catch (error) {
        if (error instanceof AxiosError) {
          errorHandler(error);
        }
      }
    };
  };

  return (
    <StyledAvatar className={props.className}>
      <div className="block__user-photo">
        <img className="user-photo" src={user?.avatar || pseudoPhoto} alt="plug" />
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
