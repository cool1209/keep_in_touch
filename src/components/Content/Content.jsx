import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import styles from './Content.module.css';

const Content = ({ state, store }) => {
  return (
    <div className={styles.content}>
      <Header />
        <div  className={styles.content__container}>
          <Sidebar />
          <Main state={state} store={store} />
        </div>
      <Footer />
    </div>
  );
};

export default Content;
