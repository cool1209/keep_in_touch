import React from 'react';

import Following from './Following/Following';
import styles from './SideFollowing.module.scss';

const SideFollowing = ({ followings }) => {
  return (
    <div className={styles.sideFollowing}>
      <h4 className={styles.sideFollowing__title}>Following:</h4>

      <div className={styles.sideFollowing__buttons}>
        {followings
          .map(following => (
            <Following following={following} key={following.id} />
          ))
        }
      </div>
    </div>
  );
};

export default SideFollowing;
