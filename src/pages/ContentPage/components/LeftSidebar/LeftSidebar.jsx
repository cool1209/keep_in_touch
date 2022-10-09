import React from 'react';
import s from './LeftSidebar.module.css';

import SideFriends from './components/SideFriends/SideFriends';
import SideNav from './components/SideNav/SideNav';

const LeftSidebar = () => {
  return (
    <div className={s.sidebar}>
      <SideNav />
      <SideFriends />
    </div>
  );
};

export default LeftSidebar;
