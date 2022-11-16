import React from 'react';
import styles from './ProfileAbout.module.scss';

const ProfileAbout = ({ profileAbout }) => {
  return (
    <div className={styles.userAbout}>
      <h4 className={styles.userAbout__title}>
        About me:
      </h4>
      
      <p className={styles.userAbout__text}>
        {profileAbout}
      </p>
    </div>
  );
};

export default ProfileAbout;
