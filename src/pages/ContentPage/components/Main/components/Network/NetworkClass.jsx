import React from 'react';
import server from '../../../../../../backend/server/server';
import PaginationButtons from '../../../../../shared/PaginationButtons/PaginationButtons';
import NetworkStyles from './Network.module.css';
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
      this.props.setUsers(users.items, users.totalCount, page);
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
  
        <PaginationButtons
          styles={NetworkStyles.pages}
          pages={pages}
          currentPage={this.props.currentPage}
          getDataPage={this.getUsers.bind(this)}
        />

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
