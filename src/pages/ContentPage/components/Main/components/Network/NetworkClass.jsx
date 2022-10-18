import React from 'react';
import server from '../../../../../../backend/server/server';
import NetworkStyles from './Network.module.css';
import PageButton from '../../../../../shared/PageButtons/PageButton/PageButton';
import User from './User/User';

class Network extends React.Component {
  state = {
    title: 'All users',
  };

  componentDidMount() {
    if (!this.props.users.length) {
      this.getUsers(1);
    };
  }

  getUsers(page) {
    server.get(`server/api/users?page=${page}`)
    .then(users => {
      this.props.setUsers(users.items, users.totalCount);
    })
  }

  render() {
    const { title } = this.state;
    const { users, pages } = this.props;

    return (
      <section className={NetworkStyles.wrapper}>
        <h2 className={NetworkStyles.title}>
          {title}
        </h2>
  
        <div className={NetworkStyles.pages}>
          {pages.map(page => (
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
    )
  }
};

export default Network;
