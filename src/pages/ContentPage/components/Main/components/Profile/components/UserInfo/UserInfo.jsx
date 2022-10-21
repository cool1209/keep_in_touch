import React from 'react';
import UserInfoStyles from './UserInfo.module.css';
import classNames from 'classnames';
import LogoutButton from './LogoutButton/LogoutButton';

const UserInfo = ({ user, logoutUser }) => {
  const isLogoutButton = true;

  return (
    <section className={UserInfoStyles.wrapper}>
      <div className={UserInfoStyles.img}>
        <img
          src={user.wallpaper}
          alt='User profile wallpaper'
          className={UserInfoStyles.wallpaper}
        />

        <div className={UserInfoStyles.avatarContainer}>
          <img
            src={user.avatar}
            alt='User avatar'
            className={UserInfoStyles.avatar}
          />
        </div>

        {isLogoutButton &&
          <LogoutButton userId={user.id} logoutUser={logoutUser} />
        }
      </div>

      <div className={UserInfoStyles.info}>
        <h2 className={UserInfoStyles.name}>
          {user.name}
        </h2>

        <div className={UserInfoStyles.status}>
          <span className={classNames(
            `${UserInfoStyles.statusIndicator} ${UserInfoStyles.statusIndicator_offline}`,
            {
              [UserInfoStyles.statusIndicator_online]: user.status === 'Online'
            }
            )}
          ></span>
            
          <em>{user.status}</em>
        </div>

        <div
          className={`${UserInfoStyles.city} ${UserInfoStyles.infoItem}`}
        >
          <h4>
            Lives in:
          </h4>

          {user.city}
        </div>

        <div
          className={`${UserInfoStyles.about} ${UserInfoStyles.infoItem}`}
        >
          <h4>
            About me:
          </h4>
          
          <p>{user.about}</p>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
