import React from 'react';
import styles from './Music.module.css';

const Music = () => {
  return (
    <div className={styles.music}>
      <h1>
        Music page under development...
      </h1>

      <div>
        <h3>
          To Do:
        </h3>
        
        <ol className={styles.todo}>
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
