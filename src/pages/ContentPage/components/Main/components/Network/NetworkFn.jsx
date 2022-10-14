import React, { useEffect, useState } from 'react';
import server from '../../../../../../backend/server';
import styles from './Network.module.css';
import User from './User/User';
import WithNoData from '../../../../../shared/WithNoData/WithNoData';

const Network = ({
  users,
  page,
  setUsers,
  addUsers
}) => {
  const [ title, setTitle ] = useState('All users:');
  const [ isBtn, setIsBtn ] = useState(true);

  const getUsers = (propsFn) => {
    server.get('server/api/users/' + page)
    .then(users => {
      if (users) {
        propsFn(users);
      } else {
        setIsBtn(false);
      }
    })
  }
  
  useEffect(() => {
    if (!users.length) {
      getUsers(setUsers)
    };
  }, []);

  return (
    <section className={styles.network}>
      <h2 className={styles.network__title}>{title}</h2>

      <ul className={styles.network__users}>
        {users.map(user => (
          <User user={user}  key={user.id} />
        ))}
      </ul>
      
      {users.length
      ? isBtn &&
          <button
            className={styles.network__btn}
            onClick={() => getUsers(addUsers)}
          >Show more...</button>
        
      : <WithNoData message={'Users is loading...'} />
      }
      
    </section>
  );
};

export default Network;
