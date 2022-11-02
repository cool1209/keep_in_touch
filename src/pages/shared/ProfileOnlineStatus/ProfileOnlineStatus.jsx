import classNames from 'classnames';
import React from 'react';
import styles from './ProfileOnlineStatus.module.css';

const ProfileOnlineStatus = ({ onlineStatus }) => {
  return (
    <div className={styles.online}>
      <span className={classNames(
        `${styles.indicator} ${styles.indicator_offline}`,
          {
            [styles.indicator_online]: onlineStatus
          }
        )}></span>
        
      <em className={styles.onlineText}>
        {onlineStatus ? 'Online' : 'Offline'}
      </em>
    </div>
  );
};

export default ProfileOnlineStatus;
