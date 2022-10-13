import React from 'react';
import server from '../../../../../../backend/server';
import styles from './Network.module.css';
import User from './User/User';

class Network extends React.Component {
  state = {
    title: 'All users',
  };

  componentDidMount() {
    server.get('server/api/users')
    .then(users => {
      this.props.setUsers(users);
    })
  }

  render() {
    const { title } = this.state;
    const { users } = this.props;

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
        
        <button
          className={styles.network__btn}
          onClick={null}
        >Show more...</button>
      </section>
    )
  }
};

export default Network;
