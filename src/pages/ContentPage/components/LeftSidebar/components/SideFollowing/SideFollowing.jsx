import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <img
                  className={styles.avatar}
                  src={following.avatar}
                  alt="Following avatar"
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
