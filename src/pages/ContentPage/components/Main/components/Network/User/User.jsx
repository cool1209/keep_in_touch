import React from 'react';
import { NavLink } from 'react-router-dom';
import FollowingButton from '../../../../../../shared/FollowingButton/FollowingButton';
import ProfileOnlineStatus from '../../../../../../shared/ProfileOnlineStatus/ProfileOnlineStatus';
import styles from './User.module.css';

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
    <li className={styles.wrapper}>
      <NavLink to={`/profile/${user.id}`}>
        <img
          src={user.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
      </NavLink>

      <h3 className={styles.name}>
        {user.name}
      </h3>

      <ProfileOnlineStatus onlineStatus={user.online} />

      <div className={styles.city}>
        {user.city}
      </div>

      <FollowingButton
        isFollowing={isFollowing}
        followingToggler={followingToggler}
        disabledState={checkFollowingProcess(user.id)}
      />

      <button className={styles.btn}>
        Message
      </button>
    </li>
  );
};

export default User;
