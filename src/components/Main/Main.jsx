import React from 'react';
import Profile from './Profile/Profile';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Profile />
    </main>
  );
};

export default Main;
