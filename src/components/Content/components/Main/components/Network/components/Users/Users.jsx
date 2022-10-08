import React from 'react';
import styles from './Users.module.css';

import User from './components/User';

const Users = () => {
  return (
    <div className={styles.users}>
      <div className={styles.users__list}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>

      <button className={styles.users__btn}>Show more...</button>
    </div>
  );
};

export default Users;
