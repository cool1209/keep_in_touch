import React from 'react';
import s from './LoginPage.module.css';

const LoginPage = ({ users, onLoginUser }) => {
  const filteredUsers = users.filter(user => user.name !== 'User name');

  return (
    <div className={s.login}>
      <h1 className={s.login__title}>
        <span className={s.login__titlePart}>Welcome</span>
        <span className={s.login__titlePart}>to</span>
        <span className={s.login__socialNetworksName}>Keep in touch</span>
      </h1>

      <p className={s.login__description}>
        The test login page to check the functionality of <br /> this social networks for different users.
      </p>

      <p className={s.login__hint}>
        Select a user and click the "Sign in" button.
      </p>

      <div className={s.login__users}>
        {filteredUsers.map(user => (
          <button
            key={user.id}
            className={s.login__user}
          >{user.name}</button>
        ))}
      </div>

      <div className={s.login__field}>
        <input
          className={s.login__input}
          type='text'
          placeholder='Input your login...'
          // value={}
          disabled
        />

        <button className={s.login__btn}>Sign in</button>
      </div>
    </div>
  );
};

export default LoginPage;
