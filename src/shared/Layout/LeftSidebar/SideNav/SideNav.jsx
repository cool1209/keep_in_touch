import React from 'react';

import SideNavLink from './SideNavLink/SideNavLink';
import styles from './SideNav.module.scss';

const SideNav = ({ userId, setNoContactSelected }) => {
  const links = [
    {
      path: '/home',
      name: 'Home',
      id: 'home-icon'
    },
    {
      path: '/messaging',
      name: 'Messaging',
      id: 'dialogs-icon'
    },
    {
      path: '/network',
      name: 'Network',
      id: 'network-icon'
    },
    {
      path: '/music',
      name: 'Music',
      id: 'music-icon'
    },
    {
      path: `/profile/` + userId,
      name: 'Profile',
      id: 'profile-icon'
    }
  ];
  
  return (
    <nav className={styles.sidenav}>
      {links.map(link => (
        <SideNavLink
          key={link.id}
          link={link}
          onSetNoContactSelected={setNoContactSelected}
        />
      ))}
    </nav>
  );
};

export default SideNav;
