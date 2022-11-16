import React from 'react';

import Header from './Header/Header';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import Footer from './Footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <main className={styles.layout__main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
