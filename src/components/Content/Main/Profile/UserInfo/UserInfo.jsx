import React from 'react';
import styles from './UserInfo.module.css';
import GetIcon from '../../../../../img/GetIcon';

const UserInfo = ({ user, removeCurentUser }) => {
  return (
    <section className={styles.user}>
      <div className={styles.user__images}>
        <div>
          <img
            src={user.wallpaper}
            alt='User profile wallpaper'
            className={styles.user__wallpaper}
          />
        </div>

        <div className={styles.user__avatarContainer}>
          <img
            src={user.avatar}
            alt='User avatar'
            className={styles.user__avatar}
          />
        </div>

        <button
          className={styles.user__logout}
          onClick={() => removeCurentUser()}
        >
          Logout
          <GetIcon id='logout-icon' />
        </button>
      </div>

      <h2 className={styles.user__name}>
        {user.name}
      </h2>

      <div className={styles.user__about}>
        {user.about}
      </div>
    </section>
  );
};

export default UserInfo;
