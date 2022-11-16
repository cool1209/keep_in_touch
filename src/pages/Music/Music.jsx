import React from 'react';
import { GetImg } from '../../assets/img/GetImg';
import styles from './Music.module.scss';

const Music = () => {
  return (
    <div className={styles.music}>
      <h1 className={styles.music__title}>
        Music page
      </h1>

      <h3 className={styles.music__subtitle}>
        under development...
      </h3>

      <div className={styles.music__todo}>
        <h4  className={styles.music__todoTitle}>
          To Do:
        </h4>
        
        <ol className={styles.music__todoList}>
          <li>Add to search music</li>
          <li>Add music to a user playlist</li>
          <li>Add a user playlist</li>
        </ol>
      </div>

      <div className={styles.music__imgContainer}>
        <GetImg id='note' />
      </div>
    </div>

  );
};

export default Music;
