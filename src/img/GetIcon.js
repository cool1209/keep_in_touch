import React from 'react';
import styles from './ImagesStyles.module.css';
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
          className={styles.logoutIcon}
        />
      );

    case 'like-icon':
      return (
        <img
          src={like}
          alt='Like icon'
          className={styles.likeIcon}
        />
      );
    
    case 'profile-icon':
      return (
        <img
          src={profile}
          alt='Profile icon'
          className={styles.profileIcon}
        />
      );

    case 'dialogs-icon':
      return (
        <img
          src={dialogs}
          alt='Dialogs icon'
          className={styles.dialogsIcon}
        />
      );
     
    case 'home-icon':
      return (
        <img
          src={home}
          alt='Home icon'
          className={styles.homeIcon}
        />
      );

    case 'network-icon':
      return (
        <img
          src={network}
          alt='Network icon'
          className={styles.networkIcon}
        />
      );

    case 'music-icon':
      return (
        <img
          src={music}
          alt='Music icon'
          className={styles.musicIcon}
        />
      );
         
    default:
      return null;
  };
};

export default GetIcon;
