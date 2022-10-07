import React from 'react';
import styles from './Users.module.css';

import User from './components/User';

const Users = () => {
  return (
    <div className={styles.users}>
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
  );
};

export default Users;
