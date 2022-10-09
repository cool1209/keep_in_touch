import React from 'react';
import s from './Content.module.css';

import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Main from './components/Main/Main';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Footer from './components/Footer/Footer';


const Content = () => {
  return (
    <div className={s.content}>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <Main />
      <Footer />
    </div>
  );
};

export default Content;
