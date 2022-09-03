import React from 'react';
import styles from './Publication.module.css';
import userAva from './../../../../user-ava.jpg';

const Publication = () => {
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
      </div>
      
      <div className={styles.userText}>
        During the Joseon era, a mermaid saves the son of a nobleman, Kim Dam-ryeong, from drowning. Following the incident, the two children become close friends, and Dam-ryeong names her Se-hwa, meaning 'a bright, shining child', after his deceased younger sister. Despite being from two different worlds, they fall in love until Dam-ryeong is forced to take up an arranged marriage. Se-hwa plans to live upon the land with Dam-ryeong, but she cannot turn her fishtail into a pair of human legs yet due to having not reached adulthood. Devastated by the news of Dam-ryeong's marriage, she decides to leave him forever.
      </div>
    </article>
  );
};

export default Publication;
