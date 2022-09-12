import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = ({ users }) => {
  return (
    <section className={styles.user}>
      <div className={styles.images}>
        <div>
          <img
            src={users[0].wallpaper}
            alt='User profile wallpaper'
            className={styles.wallpaper}
          />
        </div>

        <div className={styles.avatarContainer}>
          <img
            src={users[0].avatar}
            alt='User avatar'
            className={styles.avatar}
          />
        </div>
      </div>

      <h2 className={styles.userName}>
        {users[0].name}
      </h2>

      <div className={styles.about}>
        {users[0].about}
      </div>
    </section>
  );
};

export default UserInfo;
