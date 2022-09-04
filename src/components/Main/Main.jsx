import React from 'react';
// import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      {/* <Profile /> */}
      <Messages />
    </main>
  );
};

export default Main;
