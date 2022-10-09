import React from 'react';
import styles from './UserInfo.module.css';
import GetIcon from '../../../../../../../../img/GetIcon';
import classNames from 'classnames';

const UserInfo = ({ user, onLogoutUser }) => {
  return (
    <section className={styles.user}>
      <div className={styles.user__images}>
        <img
          src={user.wallpaper}
          alt='User profile wallpaper'
          className={styles.user__wallpaper}
        />

        <div className={styles.user__avatarContainer}>
          <img
            src={user.avatar}
            alt='User avatar'
            className={styles.user__avatar}
          />
        </div>

        <button
          className={styles.user__logout}
          onClick={() => onLogoutUser()}
        >
          Logout
          <GetIcon id='logout-icon' />
        </button>
      </div>

      <div className={styles.user__info}>
        <h2 className={styles.user__name}>
          {user.name}
        </h2>

        <div className={styles.user__status}>
          <span className={classNames(
            `${styles.user__indicator} ${styles.user__indicator_offline}`,
              {
                [styles.user__indicator_online]: user.status === 'Online'
              }
            )}></span>
            
          <em>{user.status}</em>
        </div>

        <div className={styles.user__city}>
          <b>Lives in:</b> {user.city}
        </div>

        <div className={styles.user__about}>
          <b>About me:</b>
          <p>{user.about}</p>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
