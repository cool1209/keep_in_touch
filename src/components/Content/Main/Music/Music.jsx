import React from 'react';
import styles from './Music.module.css';

const Music = () => {
  return (
    <div className={styles.music}>
      <h1>Music page</h1>
      <h3> under development...</h3>

      <h4  className={styles.todo}>
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
