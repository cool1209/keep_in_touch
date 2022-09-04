import React, { startTransition } from 'react';
import styles from './Messages.module.css';
import userAva from './user-ava.jpg';

const Messages = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Messages:</h2>
      <div className={styles.container}>
        <ul className={styles.dialogList}>
          <li className={styles.dialog}>
            Spiderman
          </li>

          <li className={styles.dialog}>
            Hulk
          </li>

          <li className={styles.dialog}>
            Natasha
          </li>
        </ul>

        <ul className={styles.messageList}>
          <li className={styles.message}>
            <div className={styles.user}>
              <img src={userAva} alt='User avatar' className={styles.userAva}/>

              <p className={styles.userName}>
                ironman
              </p>
            </div>

            <div className={styles.userMessage}>
              Hello man, how are you?
            </div>
          </li>

          <li className={styles.message}>
            <div className={styles.user}>
              <img src={userAva} alt='User avatar' className={styles.userAva}/>

              <p className={styles.userName}>
                ironman
              </p>
            </div>

            <div className={styles.userMessage}>
              I'm five, what about you?
            </div>
          </li>

          <li className={styles.message}>
            <div className={styles.user}>
              <img src={userAva} alt='User avatar' className={styles.userAva}/>

              <p className={styles.userName}>
                ironman
              </p>
            </div>

            <div className={styles.userMessage}>
              Not bad too
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Messages;
