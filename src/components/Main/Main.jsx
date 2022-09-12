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
import HomePage from './HomePage/HomePage';

const Main = ({
  users,
  publications,
  messages,
  dialogs
}) => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        
        <Route path='/profile' element={
          <Profile users={users} publications={publications}/>
        }/>

        <Route path='/messages' element={
          <Messages dialogs={dialogs} messages={messages} />
        }/>

        <Route path='/news' element={<News/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </main>
  );
};

export default Main;
