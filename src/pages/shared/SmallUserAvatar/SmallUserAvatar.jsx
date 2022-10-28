import React from 'react';
import SmallUserAvatarStyles from './SmallUserAvatar.module.css';

const SmallUserAvatar = ({
  src,
  styles
}) => {
  return (
    <img 
      src={src}
      alt='User avatar'
      className={`${SmallUserAvatarStyles.avatar} ${styles}`}
    />
  );
};

export default SmallUserAvatar;
