import React from 'react';
import LeftSidebarStyles from './LeftSidebar.module.css';

import SideFriends from './components/SideFriends/SideFriends';
import SideNav from './components/SideNav/SideNav';


const LeftSidebar = () => {
  return (
    <div className={LeftSidebarStyles.wrapper}>
      <SideNav />
      <SideFriends />
    </div>
  );
};

export default LeftSidebar;
