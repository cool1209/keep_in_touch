import React from 'react';
import PaginationButtons from '../../../../../shared/PaginationButtons/PaginationButtons';
import NetworkStyles from './Network.module.css';
import User from './User/User';

const Network = ({
  pages,
  currentPage,
  users,
  getUsers
}) => {
  
  return (
      <section className={NetworkStyles.wrapper}>
        <PaginationButtons
          styles={NetworkStyles.pages}
          pages={pages}
          currentPage={currentPage}
          getDataPage={getUsers}
        />

        <ul className={NetworkStyles.users}>
          {users.map(user => (
            <User user={user}  key={user.id} />
          ))}
        </ul>
      </section>
  )
};

export default Network;
