import React from 'react';
import { NavLink } from 'react-router-dom';
import { GetImage } from '../../../img/GetImage';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/profile">
        <GetImage id={'header-logo'} />
      </NavLink>
      

      <h1 className={styles.header__title}>
        Keep in touch
      </h1>
    </header>
  );
};

export default Header;
