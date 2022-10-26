import classNames from 'classnames';
import React from 'react';
import PaginationButtons from '../../../../../shared/PaginationButtons/PaginationButtons';
import Preloader from '../../../../../shared/Preloader/Preloader';
import NetworkStyles from './Network.module.css';
import User from './User/UserContainer';

const Network = ({
  pages,
  currentPage,
  users,
  getUsers,
  pageIsLoaded,
  usersPageIsLoading
}) => {
  return (
    <div className={NetworkStyles.wrapper}>
      {pageIsLoaded
      ? <section className={NetworkStyles.inner}>
          <PaginationButtons
            isDisabled={usersPageIsLoading}
            styles={NetworkStyles.pages}
            pages={pages}
            currentPage={currentPage}
            onEvent={getUsers}
            />

          <div className={NetworkStyles.usersContainer}>
            <ul className={classNames(
              NetworkStyles.users,
              {[NetworkStyles.users_loading]: usersPageIsLoading}
            )}>         

              {users.map(user => (
                <User user={user}  key={user.id} />
              ))}
            </ul>

            {usersPageIsLoading &&
              <div className={NetworkStyles.usersBlure}>
                <Preloader />
              </div>
            }
          </div>
        </section>

      : <Preloader />
      } 
    </div>
  )
};

export default Network;
