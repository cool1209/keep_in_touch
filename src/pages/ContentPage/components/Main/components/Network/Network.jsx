import React from 'react';
import s from './Network.module.css';
import User from './User/User';

const Network = ({ users }) => {
  const title = 'All users:';

  return (
    <section className={s.network}>
      <h2 className={s.network__title}>{title}</h2>

      <ul className={s.network__users}>
        {users.map(user => (
          <User user={user}  key={user.id} />
        ))}
      </ul>

      <button className={s.network__btn}>Show more...</button>
    </section>
  );
};

export default Network;
