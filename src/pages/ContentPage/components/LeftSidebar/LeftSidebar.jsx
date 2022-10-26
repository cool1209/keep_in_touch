import React from 'react';
import LeftSidebarStyles from './LeftSidebar.module.css';

import SideNavContainer from './components/SideNav/SideNavContainer';
import SideFollowing from './components/SideFollowing/SideFollowing';


const LeftSidebar = () => {
  return (
    <div className={LeftSidebarStyles.wrapper}>
      <SideNavContainer />
      <SideFollowing />
    </div>
  );
};

export default LeftSidebar;
