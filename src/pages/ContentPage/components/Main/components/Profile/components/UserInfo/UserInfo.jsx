import React from 'react';
import s from './UserInfo.module.css';
import GetIcon from '../../../../../../../../img/GetIcon';
import classNames from 'classnames';

const UserInfo = ({ user, onLogoutUser }) => {
  return (
    <section className={s.user}>
      <div className={s.user__images}>
        <img
          src={user.wallpaper}
          alt='User profile wallpaper'
          className={s.user__wallpaper}
        />

        <div className={s.user__avatarContainer}>
          <img
            src={user.avatar}
            alt='User avatar'
            className={s.user__avatar}
          />
        </div>

        <button
          className={s.user__logout}
          onClick={() => onLogoutUser()}
        >
          Logout
          <GetIcon id='logout-icon' />
        </button>
      </div>

      <div className={s.user__info}>
        <h2 className={s.user__name}>
          {user.name}
        </h2>

        <div className={s.user__status}>
          <span className={classNames(
            `${s.user__indicator} ${s.user__indicator_offline}`,
              {
                [s.user__indicator_online]: user.status === 'Online'
              }
            )}></span>
            
          <em>{user.status}</em>
        </div>

        <div className={s.user__city}>
          <b>Lives in:</b> {user.city}
        </div>

        <div className={s.user__about}>
          <b>About me:</b>
          <p>{user.about}</p>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
