import React from 'react';
import { NavLink } from 'react-router-dom';

import FollowingButton from '../../../shared/FollowingButton/FollowingButton';
import MessageButton from '../../../shared/MessageButton/MessageButton';
import OnlineStatus from '../../../shared/OnlineStatus/OnlineStatus';
import styles from './User.module.scss';

const User = ({
  authUserId,
  user,
  onFollow,
  onUnfollow,
  isFollowing,
  checkFollowingProcess
}) => {
  const followingToggler = () => {
    isFollowing
    ? onUnfollow(authUserId, user)
    : onFollow(authUserId, user);
  };

  return (
    <li className={styles.user}>
      <NavLink to={`/profile/${user.id}`}>
        <img
          src={user.avatar}
          alt="User avatar"
          className={styles.user__avatar}
        />
      </NavLink>

      <h4 className={styles.user__name}>
        {user.name}
      </h4>

      <OnlineStatus onlineStatus={user.isOnline} />

      <div className={styles.user__city}>
        {user.city}
      </div>

      <FollowingButton
        isFollowing={isFollowing}
        followingToggler={followingToggler}
        disabledState={checkFollowingProcess(user.id)}
      />

      <MessageButton />
    </li>
  );
};

export default User;
