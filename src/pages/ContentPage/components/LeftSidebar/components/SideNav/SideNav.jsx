import React from 'react';
import SideNavStyles from './SideNav.module.css';
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
    <nav className={SideNavStyles.wrapper}>
      {links.map(link => (
        <CustomNavLink
          style={[SideNavStyles.link, SideNavStyles.activeLink]}
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
