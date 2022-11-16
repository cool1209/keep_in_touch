import React from 'react';

import styles from './ProfileInfo.module.scss';
import OnlineStatus from '../../../shared/OnlineStatus/OnlineStatus';
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';
import ProfileAbout from './ProfileAbout/ProfileAbout';
import ProfileImages from './ProfileImages/ProfileImages';

const ProfileInfo = ({ profile, onlineStatus }) => {
  return (
    <section className={styles.userInfo}>
      <ProfileImages wallpaper={profile.wallpaper} avatar={profile.avatar} />

      <div className={styles.userInfo__info}>
        <h2 className={styles.userInfo__name}>
          {profile.name}
        </h2>

        <ProfileStatusContainer />
        <OnlineStatus onlineStatus={onlineStatus} />

        <div
          className={`${styles.userInfo__city} ${styles.userInfo__infoItem}`}
        >
          <h4>
            Lives in:
          </h4>

          {profile.city}
        </div>

        <ProfileAbout profileAbout={profile.about} />
      </div>
    </section>
  );
};

export default ProfileInfo;
