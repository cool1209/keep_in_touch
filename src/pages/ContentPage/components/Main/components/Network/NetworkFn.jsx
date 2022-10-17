import React, { useEffect, useState } from 'react';
import server from '../../../../../../backend/server/server';
import NetworkStyles from './Network.module.css';
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
    server.get(`server/api/users?page=${page}`)
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
    <section className={NetworkStyles.wrapper}>
      <h2 className={NetworkStyles.title}>{title}</h2>

      <ul className={NetworkStyles.users}>
        {users.map(user => (
          <User user={user}  key={user.id} />
        ))}
      </ul>
      
      {users.length
      ? isBtn &&
          <button
            className={NetworkStyles.btn}
            onClick={() => getUsers(addUsers)}
          >Show more...</button>
        
      : <WithNoData message={'Users is loading...'} />
      }
      
    </section>
  );
};

export default Network;
