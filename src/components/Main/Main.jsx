import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

import styles from './Main.module.css';

const Main = ({ store }) => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/profile' element={ <Profile store={store}/> } />
        <Route path='/dialogs/*' element={ <Dialogs store={store} /> } />
        <Route path='/news' element={ <News/> } />
        <Route path='/music' element={ <Music/> } />
        <Route path='/settings' element={ <Settings/> } />
      </Routes>
    </main>
  );
};

export default Main;
