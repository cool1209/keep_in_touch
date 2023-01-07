import React from 'react';

import styles from './GetIcon.module.scss';
import logout from './icons/logout.png';
import like from './icons/like.ico';
import home from './icons/home.png';
import dialogs from './icons/dialogs.ico';
import network from './icons/network.ico';
import community from './icons/community.png';
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
          className={styles.sideNavIcon}
        />
      );

    case 'dialogs-icon':
      return (
        <img
          src={dialogs}
          alt='Dialogs icon'
          className={styles.sideNavIcon}
        />
      );
     
    case 'home-icon':
      return (
        <img
          src={home}
          alt='Home icon'
          className={styles.sideNavIcon}
        />
      );

    case 'network-icon':
      return (
        <img
          src={network}
          alt='Network icon'
          className={styles.sideNavIcon}
        />
      );

    case 'community-icon':
      return (
        <img
          src={community}
          alt='Community icon'
          className={styles.sideNavIcon}
        />
      );
         
    default:
      return null;
  };
};

export default GetIcon;
