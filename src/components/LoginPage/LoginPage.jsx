import React from 'react';
import s from './LoginPage.module.css';

const LoginPage = ({ users, onLoginUser }) => {
  return (
    <div className={s.login}>
      <h1 className={s.login__title}>
        <span className={s.login__titlePart}>Welcome</span>
        <span className={s.login__titlePart}>to</span>
        <span className={s.login__socialNetworksName}>Keep in touch</span>
      </h1>

      <p className={s.login__description}>
        This is a test home page to test the functionality of the <strong>"Keep in touch"</strong> social networks for different users.
      </p>

      {users.length > 0
        ? <>
            <h4 className={s.login__choice}>
              Select a user:
            </h4>

            <ul className={s.login__users}>
              {users.map(user => (
                <li
                  key={user.id}
                  onClick={() => onLoginUser(user.id)}
                  title={user.name}
                >
                  <img
                    src={user.avatar}
                    alt="User avatar"
                    className={s.login__user}
                  />
                </li>
              ))}
            </ul>
          </>
        : <div className={s.login__usersLoading}>
            Users are loading...
          </div>
      }
    </div>
  );
};

export default LoginPage;
