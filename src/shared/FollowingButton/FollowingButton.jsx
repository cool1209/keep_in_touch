import classNames from 'classnames';
import React from 'react';
import styles from './FollowingButton.module.scss';

const FollowingButton = ({
  isFollowing,
  onFollowingToggler,
  disabledState
}) => {
  return (
    <button 
      className={classNames(
        styles.button,
        {[styles.button_unfollow]: isFollowing}
      )}

      onClick={onFollowingToggler}

      disabled={disabledState}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowingButton;
