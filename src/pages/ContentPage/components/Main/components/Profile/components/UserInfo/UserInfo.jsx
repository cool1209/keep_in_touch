import React from 'react';
import styles from './UserInfo.module.css';
import classNames from 'classnames';

const UserInfo = ({ currentUser }) => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.img}>
        <img
          src={currentUser.wallpaper}
          alt='User profile wallpaper'
          className={styles.wallpaper}
        />

        <div className={styles.avatarContainer}>
          <img
            src={currentUser.avatar}
            alt='User avatar'
            className={styles.avatar}
          />
        </div>
      </div>

      <div className={styles.info}>
        <h2 className={styles.name}>
          {currentUser.name}
        </h2>

        <div className={styles.status}>
          <span className={classNames(
            `${styles.statusIndicator} ${styles.statusIndicator_offline}`,
            {
              [styles.statusIndicator_online]: currentUser.status === 'Online'
            }
            )}
          ></span>
            
          <em>{currentUser.status}</em>
        </div>

        <div
          className={`${styles.city} ${styles.infoItem}`}
        >
          <h4>
            Lives in:
          </h4>

          {currentUser.city}
        </div>

        <div
          className={`${styles.about} ${styles.infoItem}`}
        >
          <h4>
            About me:
          </h4>
          
          <p>{currentUser.about}</p>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
