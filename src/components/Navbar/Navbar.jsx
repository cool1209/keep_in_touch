import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

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

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <nav>
        <PageNavLink to='/profile' linkName='Profile'/>
        <PageNavLink to='/messages' linkName='Messages'/>
        <PageNavLink to='/news' linkName='News'/>
        <PageNavLink to='/music' linkName='Music'/>
        <PageNavLink to='/settings' linkName='Settings'/>
      </nav>
    </nav>
  );
};

export default Navbar;
