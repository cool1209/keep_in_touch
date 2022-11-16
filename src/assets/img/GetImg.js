import React from 'react';

import GetImgStyles from './GetImg.module.scss'
import headerLogo from './header/logo.png';
import spinner from './spinner/spinner.svg';
import note from './music/note.gif';

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

    case 'note':
      return (
        <img
          src={note}
          alt='Note'
          className={`${GetImgStyles.note} ${props.styles}`}
        />
      );

    default:
      return null;
  };
};
