import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          Profile
        </li>

        <li>
          Messages
        </li>

        <li>
          News
        </li>

        <li>
          Music
        </li>

        <li>
          Settings
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
