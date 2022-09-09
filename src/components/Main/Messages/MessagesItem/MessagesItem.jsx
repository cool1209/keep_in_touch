import React from 'react';
import styles from './MessagesItem.module.css';

const MessagesItem = ({ avatar, name, message }) => {
  return (
    <li className={styles.MessagesItem}>
      <div className={styles.user}>
        <img src={avatar} alt='User avatar' className={styles.userAva}/>

        <p className={styles.userName}>
          {name}
        </p>
      </div>

      <div className={styles.userMessage}>
        {message}
      </div>
    </li>
  );
};

export default MessagesItem;
