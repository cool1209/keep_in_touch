import React from 'react';
import styles from './Publication.module.css';

const Publication = ({ user, publication, likes }) => {
  return (
    <article className={styles.userPublication}>
      <div className={styles.userInfo}>
        <div className={styles.avatarContainer}>
          <img 
            src={user.avatar}
            alt='User avatar'
            className={styles.avatar}
          />
        </div>

        <h4 className={styles.userName}>
          {user.name}
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
