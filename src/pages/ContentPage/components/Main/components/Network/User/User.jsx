import classNames from 'classnames';
import React from 'react';
import UserStyles from './User.module.css';

const User = ({ user }) => {
  const firstName = user.name.split(' ')[0];
  
  return (
    <li className={UserStyles.wrapper}>
      <img
        src={user.avatar}
        alt="User avatar"
        className={UserStyles.avatar}
      />

      <h3 className={UserStyles.login}>
        {firstName}
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

      <button className={UserStyles.btn}>
        Add friend
      </button>

      <button className={UserStyles.btn}>
        Message
      </button>
    </li>
  );
};

export default User;
