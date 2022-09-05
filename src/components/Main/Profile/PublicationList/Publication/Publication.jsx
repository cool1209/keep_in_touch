import React from 'react';
import styles from './Publication.module.css';

const Publication = ({ name, publication, likes }) => {
  return (
    <article className={styles.userPublication}>
      <div>
        <div className={styles.avatarContainer}>
          <img 
            src={'https://bit.ly/3Qh9rbl'}
            alt='User avatar'
            className={styles.avatar}
          />
        </div>

        <h3 className={styles.userName}>
          {name}
        </h3>

        <div className={styles.likes}>
          <button className={styles.likeBtn}>Like</button>
          <span className={styles.likesCounter}>{likes}</span>
        </div>
      </div>
      
      <div className={styles.userText}>
        {publication}
      </div>
    </article>
  );
};

export default Publication;
