import React from 'react';
import styles from './Network.module.css';

import UserFilter from './components/UserFilter/UserFilter';
import Users from './components/Users/Users';
import MessagePopap from './components/MessagePopap/MessagePopap';

const Network = () => {
  return (
    <div className={styles.network}>
      <MessagePopap />
      <Users />
      <UserFilter />
    </div>
  );
};

export default Network;
