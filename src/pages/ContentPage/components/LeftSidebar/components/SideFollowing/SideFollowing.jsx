import React from 'react';
import { NavLink } from 'react-router-dom';
import SmallUserAvatar from '../../../../../shared/SmallUserAvatar/SmallUserAvatar';
import styles from './SideFollowing.module.css';

const SideFollowing = ({ followings }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Following:</h4>

      <div className={styles.buttonsContainer}>
        {followings
          .map(following => (
            <NavLink to={`profile/${following.id}`} key={following.id}>
              <button className={styles.button}>
                <SmallUserAvatar
                  src={following.avatar}
                  styles={styles.avatar}
                />
              </button>
            </NavLink>
          ))
        }
      </div>
    </div>
  );
};

export default SideFollowing;
