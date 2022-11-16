import React from 'react';
import classNames from 'classnames';

import Preloader from '../../shared/Preloader/Preloader';
import PaginationButtons from '../../shared/PaginationButtons/PaginationButtons';
import User from './User/UserContainer';
import NetworkStyles from './Network.module.scss';

const Network = ({
  pages,
  currentPage,
  users,
  getUsers,
  pageIsLoaded,
  usersPageIsLoading
}) => {
  return (
    <div className={NetworkStyles.network}>
      {pageIsLoaded
      ? <section className={NetworkStyles.network__inner}>
          <PaginationButtons
            isDisabled={usersPageIsLoading}
            styles={NetworkStyles.network__pages}
            pages={pages}
            currentPage={currentPage}
            onEvent={getUsers}
            />

          <div className={NetworkStyles.network__usersContainer}>
            <ul className={classNames(
              NetworkStyles.network__users,
              {[NetworkStyles.network__users_loading]: usersPageIsLoading}
            )}>         

              {users.map(user => (
                <User user={user}  key={user.id} />
              ))}
            </ul>

            {usersPageIsLoading &&
              <div className={NetworkStyles.network__usersBlure}>
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
