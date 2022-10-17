import React from 'react';
import Musictyles from './Music.module.css';

const Music = () => {
  return (
    <div className={Musictyles.wrapper}>
      <h1>Music page</h1>
      <h3> under development...</h3>

      <h4  className={Musictyles.todo}>
        To Do:
      </h4>
      
      <ol>
        <li>Add to search music</li>
        <li>Add music to a user playlist</li>
        <li>Add a user playlist</li>
      </ol>
    </div>
  );
};

export default Music;
