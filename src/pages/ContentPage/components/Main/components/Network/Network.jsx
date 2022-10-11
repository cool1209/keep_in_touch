import React from 'react';
import styles from './Network.module.css';
import User from './User/User';

const Network = ({ users }) => {
  const title = 'All users:';

  return (
    <section className={styles.network}>
      <h2 className={styles.network__title}>{title}</h2>

      <ul className={styles.network__users}>
        {users.map(user => (
          <User user={user}  key={user.id} />
        ))}
      </ul>

      <button className={styles.network__btn}>Show more...</button>
    </section>
  );
};

export default Network;
