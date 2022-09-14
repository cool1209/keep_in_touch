import React from 'react';
import styles from './SideFriends.module.css';

const randomFriends = [
  { 
    id: 1,
    avatar: "https://bit.ly/3Rm5F1M"
  },
  {
    id: 2,
    avatar: "https://bit.ly/3eAJZjY"
  },
  {
    id: 3,
    avatar: "https://bit.ly/3S0izm7"
  }
];

const SideFriends = () => {
  return (
    <div className={styles.friends}>
      <h3 className={styles.title}>Friends:</h3>

      <div className={styles.friendsList}>
        {randomFriends
          .map(friend => (
            <button className={styles.friendContainer} key={friend.id}>
              <img
                className={styles.friend}
                src={friend.avatar}
                alt="Friend's avatar"
              />
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default SideFriends;
