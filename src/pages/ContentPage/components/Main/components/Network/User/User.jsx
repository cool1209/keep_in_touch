import classNames from 'classnames';
import React from 'react';
import styles from './User.module.css';

const User = ({ user }) => {

  return (
    <li className={styles.user}>
      <img
        src={user.avatar}
        alt="User avatar"
        className={styles.user__avatar}
      />

      <h3 className={styles.user__nickname}>
        {user.nickname}
      </h3>


      <div className={styles.user__status}>
        <span className={classNames(
          `${styles.user__indicator} ${styles.user__indicator_offline}`,
            {
              [styles.user__indicator_online]: user.status === 'Online'
            }
          )}></span>
          
        <em className={styles.user__statusText}>{user.status}</em>
      </div> 

      <div className={styles.user__sity}>
        {user.city}
      </div>

      <button className={styles.user__btn}>
        Add friend
      </button>

      <button className={styles.user__btn}>
        Message
      </button>
    </li>
  );
};

export default User;
