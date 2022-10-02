import React from 'react';
import GetIcon from '../../../../../../img/GetIcon';
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

        <button className={styles.publication__likeBtn}>
          <GetIcon id='like-icon' />
          <span className={styles.publication__likesCounter}>{likes}</span>
        </button>
      </div>
      
      <div className={styles.publication__userText}>
        <h3 className={styles.publication__userName}>
          {user.name}:
        </h3>
        {publication}
      </div>
    </article>
  );
};

export default Publication;
