import React from 'react';
import styles from './LoginPage.module.css';

const LoginPage = ({ users, getCurrentUser }) => {
  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>
        <span className={styles.login__titlePart}>Welcome</span>
        <span className={styles.login__titlePart}>to</span>
        <span className={styles.login__socialNetworksName}>Keep in touch</span>
      </h1>

      <p className={styles.login__description}>
        This is a test home page to test the functionality of the "Keep in touch" social networks for different users.
      </p>

      {users.length > 0
        ? <>
            <h4 className={styles.login__choice}>
              Select a user:
            </h4>

            <ul className={styles.login__users}>
              {users.map(user => (
                <li key={user.id} onClick={() => getCurrentUser(user.id)}>
                  <img src={user.avatar} alt="User avatar" className={styles.login__user} />
                </li>
              ))}
            </ul>
          </>
        : <div className={styles.login__usersLoading}>
            Users are loading...
          </div>
      }
    </div>
  );
};

export default LoginPage;
