import React from 'react';
import { AvatarImg, AvatarWrap } from './style';

const Avatar = (props) => {
  return (
    <AvatarWrap>
      <AvatarImg src={props.user_profile} alt="User Profile Img" />
    </AvatarWrap>
  );
};

export default Avatar;
