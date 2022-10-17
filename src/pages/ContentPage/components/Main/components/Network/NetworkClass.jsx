import React from 'react';
import server from '../../../../../../backend/server';
import NetworkStyles from './Network.module.css';
import User from './User/User';

class Network extends React.Component {
  state = {
    title: 'All users',
    isBtn: true
  };

  componentDidMount() {
    if (!this.props.users.length) {
      this.getUsers(this.props.setUsers);
    };
  }

  getUsers(propsFn) {
    server.get(`server/api/users?page=${this.props.page}`)
    .then(users => {
      if (users) {
        propsFn(users);
      } else {
        this.setState({isBtn: false});
      }
    })
  }

  render() {
    const { title } = this.state;
    const { users, addUsers } = this.props;

    return (
      <section className={NetworkStyles.wrapper}>
        <h2 className={NetworkStyles.title}>
          {title}
        </h2>
  
        <ul className={NetworkStyles.users}>
          {users.map(user => (
            <User user={user}  key={user.id} />
          ))}
        </ul>

        {this.state.isBtn &&
          <button
            className={NetworkStyles.btn}
            onClick={() => this.getUsers(addUsers)}
          >Show more...</button>
        }
      </section>
    )
  }
};

export default Network;
