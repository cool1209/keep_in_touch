import React from 'react';
import styles from './Publication.module.css';
import userAva from './../../user-ava.jpg';

const Publication = ({ publication, likes }) => {
  return (
    <article className={styles.userPublication}>
      <div>
        <div className={styles.avatarContainer}>
          <img 
            src={userAva}
            alt='User avatar'
            className={styles.avatar}
          />
        </div>

        <h3 className={styles.userName}>
          Iron man
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
