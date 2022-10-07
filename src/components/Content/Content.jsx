import React from 'react';
import styles from './Content.module.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const Content = () => {
  return (
    <div className={styles.content}>
      <Header />
        <div  className={styles.content__container}>
          <Sidebar />
          <Main />
        </div>
      <Footer />
    </div>
  );
};

export default Content;
