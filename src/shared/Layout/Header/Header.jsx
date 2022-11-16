import React from 'react';
import { NavLink } from 'react-router-dom';

import { GetImg } from '../../../assets/img/GetImg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <NavLink to="/">
          <GetImg id={'header-logo'} />
        </NavLink>
        
        <h1 className={styles.header__title}>
          Keep in touch
        </h1>
      </div>
    </header>
  );
};

export default Header;
