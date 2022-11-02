import React from 'react';
import styles from './UserInfo.module.css';
import ProfileOnlineStatus from '../../../../../../../shared/ProfileOnlineStatus/ProfileOnlineStatus';
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';

const UserInfo = ({ profile }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.img}>
        <img
          src={profile.wallpaper}
          alt='User profile wallpaper'
          className={styles.wallpaper}
        />

        <div className={styles.avatarContainer}>
          <img
            src={profile.avatar}
            alt='User avatar'
            className={styles.avatar}
          />
        </div>
      </div>

      <div className={styles.info}>
        <h2 className={styles.name}>
          {profile.name}
        </h2>

        <ProfileStatusContainer profileId ={profile.id} />
        <ProfileOnlineStatus onlineStatus={profile.online} />

        <div
          className={`${styles.city} ${styles.infoItem}`}
        >
          <h4>
            Lives in:
          </h4>

          {profile.city}
        </div>

        <div
          className={`${styles.about} ${styles.infoItem}`}
        >
          <h4>
            About me:
          </h4>
          
          <p>{profile.about}</p>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
