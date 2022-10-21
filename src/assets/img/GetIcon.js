import React from 'react';
import GetIconStyles from './imgStyles.module.css';
import logout from './icons/logout.png';
import like from './icons/like.ico';
import home from './icons/home.png';
import dialogs from './icons/dialogs.ico';
import network from './icons/network.ico';
import music from './icons/music.png';
import profile from './icons/profile.ico';

const GetIcon = ({ id }) => {
  switch (id) {
    case 'logout-icon':
      return (
        <img
          src={logout}
          alt='Logout icon'
          className={GetIconStyles.logoutIcon}
        />
      );

    case 'like-icon':
      return (
        <img
          src={like}
          alt='Like icon'
          className={GetIconStyles.likeIcon}
        />
      );
    
    case 'profile-icon':
      return (
        <img
          src={profile}
          alt='Profile icon'
          className={GetIconStyles.profileIcon}
        />
      );

    case 'dialogs-icon':
      return (
        <img
          src={dialogs}
          alt='Dialogs icon'
          className={GetIconStyles.dialogsIcon}
        />
      );
     
    case 'home-icon':
      return (
        <img
          src={home}
          alt='Home icon'
          className={GetIconStyles.homeIcon}
        />
      );

    case 'network-icon':
      return (
        <img
          src={network}
          alt='Network icon'
          className={GetIconStyles.networkIcon}
        />
      );

    case 'music-icon':
      return (
        <img
          src={music}
          alt='Music icon'
          className={GetIconStyles.musicIcon}
        />
      );
         
    default:
      return null;
  };
};

export default GetIcon;
