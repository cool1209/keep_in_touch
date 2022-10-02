import React from 'react';
import headerLogo from './header/logo.png';
import styles from './ImagesStyles.module.css'

export const GetImage = ({ id }) => {
  switch (id) {
    case 'header-logo':
      return (
        <img
          src={headerLogo}
          alt='Keep in touch app logo'
          className={styles.headerLogo}
        />
      );

    default:
      return null;
  };
};
