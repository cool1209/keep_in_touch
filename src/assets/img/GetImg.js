import React from 'react';
import GetImgStyles from './imgStyles.module.css'
import headerLogo from './header/logo.png';
import spinner from './spinner/spinner.svg';

export const GetImg = ({ id, ...props }) => {
  switch (id) {
    case 'header-logo':
      return (
        <img
          src={headerLogo}
          alt='Keep in touch app logo'
          className={GetImgStyles.headerLogo}
        />
      );

    case 'spinner':
      return (
        <img
          src={spinner}
          alt='Spinner'
          className={`${GetImgStyles.spinner} ${props.styles}`}
        />
      );

    default:
      return null;
  };
};
