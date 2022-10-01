import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../../logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/profile">
        <img
          src={logo}
          alt="Keep in touch logo"
          className={styles.header__logo}
        />
      </NavLink>
      

      <h1 className={styles.header__title}>
        Keep in touch
      </h1>
    </header>
  );
};

export default Header;
