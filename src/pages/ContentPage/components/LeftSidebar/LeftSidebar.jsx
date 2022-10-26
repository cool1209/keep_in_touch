import React from 'react';
import LeftSidebarStyles from './LeftSidebar.module.css';

import SideNavContainer from './components/SideNav/SideNavContainer';
import SideFollowingContainer from './components/SideFollowing/SideFollowingContainer';


const LeftSidebar = () => {
  return (
    <div className={LeftSidebarStyles.wrapper}>
      <SideNavContainer />
      <SideFollowingContainer />
    </div>
  );
};

export default LeftSidebar;
