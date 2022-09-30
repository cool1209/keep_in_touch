import React from 'react';
import styles from './Music.module.css';

const Music = () => {
  return (
    <div className={styles.music}>
      <h1>Music page</h1>
      <h3> under development...</h3>

      <div>
        <h4  className={styles.todo}>
          To Do:
        </h4>
        
        <ol>
          <li>
            Add to search music
          </li>

          <li>
            Add user's music list
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Music;
