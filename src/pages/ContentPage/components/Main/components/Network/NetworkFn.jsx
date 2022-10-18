import React, { useEffect, useState } from 'react';
import server from '../../../../../../backend/server/server';
import NetworkStyles from './Network.module.css';
import User from './User/User';
import PageButton from '../../../../../shared/PaginationButtons/Button/Button';

const Network = ({
  users,
  pagesNumbers,
  setUsers
}) => {
  const [ title, setTitle ] = useState('All users:');

  const getUsers = (page) => {
    server.get(`server/api/users?page=${page}`)
    .then(users => {
      setUsers(users.items);
    })
  }
  
  useEffect(() => {
    if (!users.length) {
      getUsers(1)
    };
  }, []);

  return (
    <section className={NetworkStyles.wrapper}>
    <h2 className={NetworkStyles.title}>
      {title}
    </h2>

    <div className={NetworkStyles.pages}>
      {pagesNumbers.map(page => (
        <PageButton
          page={page}
          getUsers={() => this.getUsers(page)}
          key={page}
        />
      ))}
    </div>

    <ul className={NetworkStyles.users}>
      {users.map(user => (
        <User user={user}  key={user.id} />
      ))}
    </ul>
  </section>
  );
};

export default Network;
