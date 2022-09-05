import React from 'react';
import { 
  Routes, 
  Route, 
} from 'react-router-dom';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </main>
  );
};

export default Main;
