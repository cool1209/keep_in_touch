import React from 'react';
import logo from './../../logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href='/'>
        <img src={logo} alt="Keep in touch logo" className={styles.logo}/>
      </a>

      <h1 className={styles.title}>
        Keep in touch
      </h1>
    </header>
  );
};

export default Header;
