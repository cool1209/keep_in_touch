import React, { useEffect, useState } from 'react';
import server from '../../../../../../backend/server';
import styles from './Network.module.css';
import User from './User/User';

const Network = ({ users, setUsers, addUsers }) => {
  const title = 'All users:';
  const [ page, setPage ] = useState(1);
  const [ isBtn, setIsBtn ] = useState(true);

  const getUsers = (action) => {
    server.get('server/api/users/' + page)
    .then(users => {
      if (users) {
        action(users);
        setPage(page + 1);
      } else {
        setIsBtn(false);
      }
    })
  }
  
  useEffect(() => {
    getUsers(setUsers)
  }, []);

  return (
    <section className={styles.network}>
      <h2 className={styles.network__title}>{title}</h2>

      <ul className={styles.network__users}>
        {users.map(user => (
          <User user={user}  key={user.id} />
        ))}
      </ul>
      
      {isBtn &&
        <button
          className={styles.network__btn}
          onClick={() => getUsers(addUsers)}
        >Show more...</button>
      }
    </section>
  );
};

export default Network;
