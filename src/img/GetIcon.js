import React from 'react';
import styles from './ImagesStyles.module.css';
import logout from './icons/logout.png';
import like from './icons/like.ico';
import profile from './icons/profile.ico';
import messages from './icons/messages.ico';
import news from './icons/news.ico';
import music from './icons/music.png';
import settings from './icons/settings.ico';

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
          alt='Logout icon'
          className={styles.likeIcon}
        />
      );
    
    case 'profile-icon':
      return (
        <img
          src={profile}
          alt='Logout icon'
          className={styles.profileIcon}
        />
      );

    case 'messages-icon':
      return (
        <img
          src={messages}
          alt='Logout icon'
          className={styles.messagesIcon}
        />
      );
     
    case 'news-icon':
      return (
        <img
          src={news}
          alt='Logout icon'
          className={styles.newsIcon}
        />
      );

    case 'music-icon':
      return (
        <img
          src={music}
          alt='Logout icon'
          className={styles.musicIcon}
        />
      );

    case 'settings-icon':
      return (
        <img
          src={settings}
          alt='Logout icon'
          className={styles.settingsIcon}
        />
      );
         
    default:
      return null;
  };
};

export default GetIcon;
