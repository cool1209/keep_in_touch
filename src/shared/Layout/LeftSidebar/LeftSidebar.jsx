import React from 'react';

import SideFollowingContainer from './SideFollowing/SideFollowingContainer';
import SideNavContainer from './SideNav/SideNavContainer';
import styles from './LeftSidebar.module.scss';


const LeftSidebar = () => {
  return (
    <div className={styles.leftSidebar}>
      <SideNavContainer />
      <SideFollowingContainer />
    </div>
  );
};

export default LeftSidebar;
