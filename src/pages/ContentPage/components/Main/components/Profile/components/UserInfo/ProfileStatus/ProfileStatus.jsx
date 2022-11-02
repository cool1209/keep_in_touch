import classNames from 'classnames';
import React from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatus = ({
  isAuthUserProfile,
  isEditMode,
  statusQuery,
  onActivateEditMode,
  onDeactivateEditMode,
  onUpdateStatus
}) => {
  return (
    <div className={styles.userStatus}>
      {isEditMode
      ? <input
          type="text"
          className={styles.userStatus__input}
          placeholder='Enter your status...'
          autoFocus={true}
          value={statusQuery}
          onChange={onUpdateStatus}
          onBlur={onDeactivateEditMode}
        />
  
      : <>
          {!isAuthUserProfile && !statusQuery
          ? <div></div>
          : <div
              className={classNames(
                styles.userStatus__value,
                {[styles.authUserStatus__value]: isAuthUserProfile}
              )}
              onClick={onActivateEditMode}
            >
              {statusQuery.trim() || 'click here to set status'}
            </div>
          }
        </>
      }
    </div>
  );
};

export default ProfileStatus;
