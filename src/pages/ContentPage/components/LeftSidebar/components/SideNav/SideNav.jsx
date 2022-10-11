import React from 'react';
import styles from './SideNav.module.css';
import CustomNavLink from '../../../../../shared/CustomNavLink';

const SideNav = () => {
  const links = [
    {
      path: 'home',
      name: 'Home',
      id: 'home-icon'
    },
    {
      path: 'dialogs',
      name: 'Dialogs',
      id: 'dialogs-icon'
    },
    {
      path: 'network',
      name: 'Network',
      id: 'network-icon'
    },
    {
      path: 'music',
      name: 'Music',
      id: 'music-icon'
    },
    {
      path: 'profile',
      name: 'Profile',
      id: 'profile-icon'
    }
  ];
  
  return (
    <nav className={styles.sidenav}>
      {links.map(link => (
        <CustomNavLink
          style={[styles.sidenav__link, styles.activeLink]}
          to={link.path}
          name={link.name}
          id={link.id}
          key={link.id}
        />
      ))}
    </nav>
  );
};

export default SideNav;
