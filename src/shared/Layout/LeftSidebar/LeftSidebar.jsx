import React from 'react';

import SideFollowingContainer from './SideFollowing/SideFollowingContainer';
import SideNav from './SideNav/SideNav';
import styles from './LeftSidebar.module.scss';


const LeftSidebar = () => {
  return (
    <div className={styles.leftSidebar}>
      <SideNav />
      <SideFollowingContainer />
    </div>
  );
};

export default LeftSidebar;
