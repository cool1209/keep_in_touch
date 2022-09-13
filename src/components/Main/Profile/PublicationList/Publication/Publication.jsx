import React from 'react';
import styles from './Publication.module.css';

const Publication = ({ publication, likes }) => {
  return (
    <article className={styles.userPublication}>
      <div className={styles.userInfo}>
        <div className={styles.avatarContainer}>
          <img 
            src={'https://bit.ly/3RGqLZ0'}
            alt='User avatar'
            className={styles.avatar}
          />
        </div>

        <h4 className={styles.userName}>
          {'Iron-man'}
        </h4>

        <div className={styles.likes}>
          <button className={styles.likeBtn}>
            Like: <span className={styles.likesCounter}>{likes}</span>
          </button>
        </div>
      </div>
      
      <div className={styles.userText}>
        {publication}
      </div>
    </article>
  );
};

export default Publication;
