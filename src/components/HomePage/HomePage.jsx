import React from 'react';
import { getCurentUserCreator } from '../../store/reducers/usersReducer';
import styles from './HomePage.module.css';

const HomePage = ({ state, store }) => {
  const users = state.users.allUsers;

  const getCurrentUser = (id) => (
    store.dispatch(getCurentUserCreator(id))
  );

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

      {users.length > 0
        ? <>
            <h4 className={styles.home__choice}>
              Select a user:
            </h4>

            <ul className={styles.home__users}>
              {users.map(user => (
                <li key={user.id} onClick={() => getCurrentUser(user.id)}>
                  <img src={user.avatar} alt="User avatar" className={styles.home__user} />
                </li>
              ))}
            </ul>
          </>
        : <div className={styles.home__usersLoading}>
            Users are loading...
          </div>
      }
    </div>
  );
};

export default HomePage;
