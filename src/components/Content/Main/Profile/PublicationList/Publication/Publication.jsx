import React from 'react';
import styles from './Publication.module.css';

const Publication = ({ user, publication, likes }) => {
  return (
    <article className={styles.publication}>
      <div className={styles.publication__userInfo}>
        <div className={styles.publication__userAvatarContainer}>
          <img 
            src={user.avatar}
            alt='User avatar'
            className={styles.publication__userAvatar}
          />
        </div>

        <h4 className={styles.publication__userName}>
          {user.name}
        </h4>

        <div className={styles.publication__likes}>
          <button className={styles.publication__likeBtn}>
            Like: <span className={styles.publication__likesCounter}>{likes}</span>
          </button>
        </div>
      </div>
      
      <div className={styles.publication__userText}>
        {publication}
      </div>
    </article>
  );
};

export default Publication;
