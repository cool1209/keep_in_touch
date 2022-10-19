import React from 'react';
import LeftSidebarStyles from './LeftSidebar.module.css';

import SideFriends from './components/SideFriends/SideFriends';
import SideNavContainer from './components/SideNav/SideNavContainer';


const LeftSidebar = () => {
  return (
    <div className={LeftSidebarStyles.wrapper}>
      <SideNavContainer />
      <SideFriends />
    </div>
  );
};

export default LeftSidebar;
