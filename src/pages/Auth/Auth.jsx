import React from 'react';

import Preloader from '../../shared/Preloader/Preloader';
import LoginHint from './AuthHint/AuthHint';
import AuthTitle from './AuthTitle/AuthTitle';
import LoginFormContainer from './AuthForm/AuthFormContainer';
import styles from './Auth.module.scss';

const Auth = ({ isLoading }) => {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__topBlock}>
        <AuthTitle />

        <p className={styles.auth__description}>
          The social network simulator
        </p>
      </div>

      <div className={styles.auth__bottomBlock}>
        {isLoading
        ? <Preloader />
        : <>
            <LoginHint />
            <LoginFormContainer />
          </>
        }
      </div>
    </div>
  );
};

export default Auth;
