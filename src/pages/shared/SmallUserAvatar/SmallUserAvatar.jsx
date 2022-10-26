import React from 'react';
import SmallUserAvatarStyles from './SmallUserAvatar.module.css';

const SmallUserAvatar = ({
  src,
  alt,
  styles
}) => {
  return (
    <img 
      src={src}
      alt={alt}
      className={`${SmallUserAvatarStyles.avatar} ${styles}`}
    />
  );
};

export default SmallUserAvatar;
