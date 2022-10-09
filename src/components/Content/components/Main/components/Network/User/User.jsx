import classNames from 'classnames';
import React from 'react';
import s from './User.module.css';

const User = ({ user }) => {

  return (
    <li className={s.user}>
      <img
        src={user.avatar}
        alt="User avatar"
        className={s.user__avatar}
      />

      <h3 className={s.user__name}>
        {user.name}
      </h3>


      <div className={s.user__status}>
        <span className={classNames(
          `${s.user__indicator} ${s.user__indicator_offline}`,
            {
              [s.user__indicator_online]: user.status === 'Online'
            }
          )}></span>
          
        <em className={s.user__statusText}>{user.status}</em>
      </div> 

      <div className={s.user__sity}>
        {user.city}
      </div>

      <button className={s.user__btn}>
        Add to friends
      </button>

      <button className={s.user__btn}>
        Send message
      </button>
    </li>
  );
};

export default User;
