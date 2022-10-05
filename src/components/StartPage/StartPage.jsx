import React from 'react';
import styles from './StartPage.module.css';

const StartPage = ({ users, getCurrentUser }) => {
  return (
    <div className={styles.start}>
      <h1 className={styles.start__title}>
        <span className={styles.start__titlePart}>Welcome</span>
        <span className={styles.start__titlePart}>to</span>
        <span className={styles.start__socialNetworksName}>Keep in touch</span>
      </h1>

      <p className={styles.start__description}>
        This is a test home page to test the functionality of the "Keep in touch" social networks for different users.
      </p>

      {users.length > 0
        ? <>
            <h4 className={styles.start__choice}>
              Select a user:
            </h4>

            <ul className={styles.start__users}>
              {users.map(user => (
                <li key={user.id} onClick={() => getCurrentUser(user.id)}>
                  <img src={user.avatar} alt="User avatar" className={styles.start__user} />
                </li>
              ))}
            </ul>
          </>
        : <div className={styles.start__usersLoading}>
            Users are loading...
          </div>
      }
    </div>
  );
};

export default StartPage;
