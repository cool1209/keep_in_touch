import React from 'react';
import styles from './Sidebar.module.css';

import SideFriends from './components/SideFriends/SideFriends';
import SideNav from './components/SideNav/SideNav';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SideNav />
      <SideFriends />
    </div>
  );
};

export default Sidebar;
