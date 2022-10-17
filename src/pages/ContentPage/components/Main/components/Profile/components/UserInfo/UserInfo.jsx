import React from 'react';
import UserInfoStyles from './UserInfo.module.css';
import GetIcon from '../../../../../../../../img/GetIcon';
import classNames from 'classnames';
import server from '../../../../../../../../backend/server';

const UserInfo = ({ user, setUser }) => {

  const logoutUser = (id) => {
    server.put(`server/api/logout?user=${id}`);
    setUser();
  }

  return (
    <section className={UserInfoStyles.wrapper}>
      <div className={UserInfoStyles.images}>
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

        <button
          className={UserInfoStyles.logoutBtn}
          onClick={() => logoutUser(user.id)}
        >
          Logout
          <GetIcon id='logout-icon' />
        </button>
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
          className={`${UserInfoStyles.city} ${UserInfoStyles.infoItemTitle}`}
        >
          <h4>
            Lives in:
          </h4>

          {user.city}
        </div>

        <div
          className={`${UserInfoStyles.about} ${UserInfoStyles.infoItemTitle}`}
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
