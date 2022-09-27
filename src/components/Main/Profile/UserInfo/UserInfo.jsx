import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = ({ users }) => {
  const user = users[0];

  return (
    <section className={styles.user}>
      <div className={styles.images}>
        <div>
          <img
            src={user.wallpaper}
            alt='User profile wallpaper'
            className={styles.wallpaper}
          />
        </div>

        <div className={styles.avatarContainer}>
          <img
            src={user.avatar}
            alt='User avatar'
            className={styles.avatar}
          />
        </div>
      </div>

      <h2 className={styles.userName}>
        {user.name}
      </h2>

      <div className={styles.about}>
        {user.about}
      </div>
    </section>
  );
};

export default UserInfo;
