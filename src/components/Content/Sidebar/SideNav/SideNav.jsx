import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './SideNav.module.css';

export const CustomNavLink = ({ 
  style,
  to,
  name,
  ...props
}) => (
  <NavLink 
    to={to}
    className={({ isActive }) => classNames(
      style[0],
      { [style[1]]: isActive }
    )}
  >
    {name}
  </NavLink>
);

const SideNav = () => {
  return (
    <nav className={styles.sidenav}>
      <CustomNavLink
        style={[styles.sidenav__link, styles.activeLink]}
        to='profile'
        name='Profile'
      />

      <CustomNavLink
        style={[styles.sidenav__link, styles.activeLink]}
        to='dialogs'
        name='Dialogs'
      />

      <CustomNavLink
        style={[styles.sidenav__link, styles.activeLink]}
        to='news'
        name='News'
      />

      <CustomNavLink
        style={[styles.sidenav__link, styles.activeLink]}
        to='music'
        name='Music'
      />

      <CustomNavLink
        style={[styles.sidenav__link, styles.activeLink]}
        to='settings'
        name='Settings'
      />
    </nav>
  );
};

export default SideNav;
