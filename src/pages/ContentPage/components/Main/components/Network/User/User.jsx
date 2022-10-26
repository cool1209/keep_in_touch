import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserStyles from './User.module.css';

const User = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <li className={UserStyles.wrapper}>
      <NavLink to={`/profile/${user.id}`}>
        <img
          src={user.avatar}
          alt="User avatar"
          className={UserStyles.avatar}
        />
      </NavLink>

      <h3 className={UserStyles.name}>
        {user.name}
      </h3>


      <div className={UserStyles.status}>
        <span className={classNames(
          `${UserStyles.indicator} ${UserStyles.indicator_offline}`,
            {
              [UserStyles.indicator_online]: user.status === 'Online'
            }
          )}></span>
          
        <em className={UserStyles.statusText}>{user.status}</em>
      </div> 

      <div className={UserStyles.city}>
        {user.city}
      </div>

      <button 
        className={classNames(
          UserStyles.btn,
          {[UserStyles.btn_unfollow]: isFollowing}
        )}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>

      <button className={UserStyles.btn}>
        Message
      </button>
    </li>
  );
};

export default User;
