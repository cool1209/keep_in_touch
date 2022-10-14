import React from 'react';
import server from '../../../../../../backend/server';
import styles from './Network.module.css';
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
    server.get('server/api/users/' + this.props.page)
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
      <section className={styles.network}>
        <h2 className={styles.network__title}>
          {title}
        </h2>
  
        <ul className={styles.network__users}>
          {users.map(user => (
            <User user={user}  key={user.id} />
          ))}
        </ul>

        {this.state.isBtn &&
          <button
            className={styles.network__btn}
            onClick={() => this.getUsers(addUsers)}
          >Show more...</button>
        }
      </section>
    )
  }
};

export default Network;
