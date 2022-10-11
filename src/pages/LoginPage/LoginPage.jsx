import React, { useState } from 'react';
import styles from './LoginPage.module.css';

const LoginPage = ({ onLoginUser }) => {
  const users = [
    {
      name: "Tony",
      login: "Iron-man"
    },
    {
      name: "Peter",
      login: "Spider-man"
    },
    {
      name: "Wade",
      login: "Deadpool"
    },
    {
      name: "Natasha",
      login: "Black-Widow"
    },
    {
      name: "Thor",
      login: "Thor"
    },
    {
      name: "Bruce",
      login: "Hulk"
    },
    {
      name: "Stephen",
      login: "Doctor-Strange"
    },
    {
      name: "Loki",
      login: "Loki"
    },
    {
      name: "Arthur",
      login: "Aquaman"
    },
    {
      name: "Kal-El",
      login: "Superman"
    },
    {
      name: "Lao",
      login: "Kung-Lao"
    },
    {
      name: "Yuri",
      login: "Undisputed"
    }
  ];

  const [userLogin, setUserLogin] = useState('');

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>
        <span className={styles.login__titlePart}>Welcome</span>
        <span className={styles.login__titlePart}>to</span>
        <span className={styles.login__socialNetworkName}>Keep in touch</span>
      </h1>

      <p className={styles.login__description}>
        The test login page to check the functionality of this social network for different users.
      </p>

      <div className={styles.login__field}>
        <input
          className={styles.login__input}
          type='text'
          placeholder='Enter your nickname...'
          value={userLogin}
          disabled
        />

        <button
          className={styles.login__btn}
          onClick={() => (
            userLogin
            ? onLoginUser(userLogin)
            : null
          )}
        >
          LogIn
        </button>
      </div>

      <p className={styles.login__hint}>
        Select a user below and click the "LogIn" button. 
      </p>

      <div className={styles.login__users}>
        {users.map(user => (
          <button
            key={user.login}
            className={styles.login__user}
            onClick={() => setUserLogin(user.login)}
          >
            {user.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
