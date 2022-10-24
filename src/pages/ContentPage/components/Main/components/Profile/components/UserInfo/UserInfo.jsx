import React from 'react';
import UserInfoStyles from './UserInfo.module.css';
import classNames from 'classnames';

const UserInfo = ({ currentUser }) => {

  return (
    <section className={UserInfoStyles.wrapper}>
      <div className={UserInfoStyles.img}>
        <img
          src={currentUser.wallpaper}
          alt='User profile wallpaper'
          className={UserInfoStyles.wallpaper}
        />

        <div className={UserInfoStyles.avatarContainer}>
          <img
            src={currentUser.avatar}
            alt='User avatar'
            className={UserInfoStyles.avatar}
          />
        </div>
      </div>

      <div className={UserInfoStyles.info}>
        <h2 className={UserInfoStyles.name}>
          {currentUser.name}
        </h2>

        <div className={UserInfoStyles.status}>
          <span className={classNames(
            `${UserInfoStyles.statusIndicator} ${UserInfoStyles.statusIndicator_offline}`,
            {
              [UserInfoStyles.statusIndicator_online]: currentUser.status === 'Online'
            }
            )}
          ></span>
            
          <em>{currentUser.status}</em>
        </div>

        <div
          className={`${UserInfoStyles.city} ${UserInfoStyles.infoItem}`}
        >
          <h4>
            Lives in:
          </h4>

          {currentUser.city}
        </div>

        <div
          className={`${UserInfoStyles.about} ${UserInfoStyles.infoItem}`}
        >
          <h4>
            About me:
          </h4>
          
          <p>{currentUser.about}</p>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
