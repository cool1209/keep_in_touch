import React from 'react';
import ContentPageStyles from './ContentPage.module.css';

import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Main from './components/Main/Main';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Footer from './components/Footer/Footer';


const ContentPage = () => {
  return (
    <div className={ContentPageStyles.wrapper}>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <Main />
      <Footer />
    </div>
  );
};

export default ContentPage;
