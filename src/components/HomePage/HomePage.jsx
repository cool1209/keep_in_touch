import React from 'react';
import { NavLink } from 'react-router-dom';
import { getCurrentUserId } from '../../data/user-data';
import styles from './HomePage.module.css';

const HomePage = ({ users }) => {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>
        <span className={styles.home__titlePart}>Welcome</span>
        <span className={styles.home__titlePart}>to</span>
        <span className={styles.home__socialNetworksName}>Keep in touch</span>
      </h1>

      <p className={styles.home__description}>
        This is a test home page to test the functionality of the "Keep in touch" social networks for different users.
      </p>

      <p className={styles.home__choice}>
        Select a user:
      </p>

      <div className={styles.home__users}>
        {users.map(user => (
          <div key={user.id} onClick={() => console.log(user.id)}>
            <NavLink to="/keep-in-touch/profile">
              <img src={user.avatar} alt="User avatar" className={styles.home__user} />
            </NavLink>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default HomePage;
