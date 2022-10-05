import React from 'react';
import styles from './Main.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomeContainer from './Home/HomeContainer';
// import Dialogs from './Dialogs/Dialogs';
import Network from './Network/Network';
import Music from './Music/Music';
import Profile from './Profile/Profile';


const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={ <Navigate to="home" /> } />
        <Route path='home' element={ <HomeContainer /> } />
        {/* <Route path='dialogs/*' element={ <Dialogs /> } /> */}
        <Route path='network' element={ <Network /> } />
        <Route path='music' element={ <Music /> } />
        <Route path='profile' element={ <Profile /> } />
      </Routes>
    </main>
  );
};

export default Main;
