import React from 'react';
import { 
  Routes, 
  Route, 
} from 'react-router-dom';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/messages' element={<Messages/>} />
      </Routes>
    </main>
  );
};

export default Main;
