import classNames from 'classnames';
import React from 'react';
import styles from './FollowingButton.module.css';

const FollowingButton = ({
  isFollowing,
  followingToggler,
  disabledState
}) => {
  return (
    <button 
      className={classNames(
        styles.btn,
        {[styles.btn_unfollow]: isFollowing}
      )}

      onClick={followingToggler}

      disabled={disabledState}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowingButton;
