import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './SideNav.module.css';
import GetIcon from '../../../../img/GetIcon';

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
    <GetIcon id={props.id} />{name}
  </NavLink>
);

const SideNav = () => {
  return (
    <nav className={styles.sidenav}>
      <CustomNavLink
        style={[styles.sidenav__link, styles.activeLink]}
        to='profile'
        name='Profile'
        id={'profile-icon'}
      />

      <CustomNavLink
        style={[styles.sidenav__link, styles.activeLink]}
        to='messages'
        name='Messages'
        id={'messages-icon'}
      />

      <CustomNavLink
        style={[styles.sidenav__link, styles.activeLink]}
        to='news'
        name='News'
        id={'news-icon'}
      />

      <CustomNavLink
        style={[styles.sidenav__link, styles.activeLink]}
        to='music'
        name='Music'
        id={'music-icon'}
      />

      <CustomNavLink
        style={[styles.sidenav__link, styles.activeLink]}
        to='settings'
        name='Settings'
        id={'settings-icon'}
      />
    </nav>
  );
};

export default SideNav;
