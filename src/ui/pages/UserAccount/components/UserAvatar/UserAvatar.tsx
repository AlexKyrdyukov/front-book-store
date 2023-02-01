import React from 'react';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import CircleButton from '../../../../components/CircleButton/CircleButton';

import { useAppSelector, useAppDispatch } from '../../../../../store';
import { userSliceActions } from '../../../../../store/slices/userSlice';
import { userApi } from '../../../../../api';
import errorHandler from '../../../../../utils/errorHandler';

import pseudoPhoto from './images/user.svg';
import camera from './images/camera.png';

import StyledAvatar from './UserAvatar.style';

type PropsType = {
  className?: string;
};

const UserAvatar: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.userId);

  const userAvatar = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user?.avatar);

  const avatar = userAvatar || pseudoPhoto;

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    if (!file![0]) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file![0]);
    reader.onloadend = async () => {
      try {
        const { avatar, message } = await userApi.setAvatar(userId, reader.result);
        // eslint-disable-next-line no-console
        console.log(avatar);
        dispatch(userSliceActions.setAvatar(avatar));
        toast.info(message);
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
        <img className="user-photo" src={avatar} alt="plug" />
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
