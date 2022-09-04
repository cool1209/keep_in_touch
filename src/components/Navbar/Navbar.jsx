import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <nav>
        <NavLink 
          to='/profile'
          className={styles.link}
        >
          Profile
        </NavLink>

        <NavLink 
          to='/messages' 
          className={styles.link}
        >
          Messages
        </NavLink>

        <NavLink 
          to='/news' 
          className={styles.link}
        >
          News
        </NavLink>

        <NavLink 
          to='/music' 
          className={styles.link}
        >
          Music
        </NavLink>

        <NavLink 
          to='/settings' 
          className={styles.link}
        >
          Settings
        </NavLink>
      </nav>
    </nav>
  );
};

export default Navbar;
