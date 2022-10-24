import React from 'react';
import MainStyles from './Main.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomeContainer from './components/Home/HomeContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NetworkContainer from './components/Network/NetworkContainer';
import Music from './components/Music/Music';
import ProfileContainer from './components/Profile/ProfileContainer';


const Main = () => {
  return (
    <main className={MainStyles.wrapper}>
      <Routes>
        <Route path='/' element={ <Navigate to="home" /> } />
        <Route path='home' element={ <HomeContainer /> } />
        <Route path='dialogs/*' element={ <DialogsContainer /> } />
        <Route path='network' element={ <NetworkContainer /> } />
        <Route path='music' element={ <Music /> } />
        <Route path='profile/:userId' element={ <ProfileContainer /> } />
      </Routes>
    </main>
  );
};

export default Main;
