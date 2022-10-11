import React from 'react';
import { NavLink } from 'react-router-dom';
import { GetImage } from '../../../../img/GetImage';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <NavLink to="/profile">
          <GetImage id={'header-logo'} />
        </NavLink>
        
        <h1 className={styles.header__title}>
          Keep in touch
        </h1>
      </div>
    </header>
  );
};

export default Header;
