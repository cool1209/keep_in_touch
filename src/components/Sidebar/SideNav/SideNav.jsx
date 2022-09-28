import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './SideNav.module.css';

export const PageNavLink = ({ to, linkName }) => (
  <NavLink 
    to={to}
    className={({ isActive }) => classNames(
      styles.link,
      { [styles.activeLink]: isActive }
    )}
  >
    {linkName}
  </NavLink>
);

const SideNav = () => {
  return (
    <nav className={styles.nav}>
      <PageNavLink to='/profile' linkName='Profile'/>
      <PageNavLink to='/messages' linkName='Dialogs'/>
      <PageNavLink to='/news' linkName='News'/>
      <PageNavLink to='/music' linkName='Music'/>
      <PageNavLink to='/settings' linkName='Settings'/>
    </nav>
  );
};

export default SideNav;
