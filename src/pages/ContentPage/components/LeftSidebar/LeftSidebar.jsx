import React from 'react';
import styles from './LeftSidebar.module.css';

import SideFriends from './components/SideFriends/SideFriends';
import SideNav from './components/SideNav/SideNav';


const LeftSidebar = () => {
  return (
    <div className={styles.leftSidebar}>
      <SideNav />
      <SideFriends />
    </div>
  );
};

export default LeftSidebar;
