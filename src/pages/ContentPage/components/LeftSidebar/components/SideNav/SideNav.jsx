import React from 'react';
import s from './SideNav.module.css';
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
    <nav className={s.sidenav}>
      {links.map(link => (
        <CustomNavLink
          style={[s.sidenav__link, s.activeLink]}
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
