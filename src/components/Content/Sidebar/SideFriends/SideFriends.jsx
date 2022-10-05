import React from 'react';
import styles from './SideFriends.module.css';

const SideFriends = () => {
  const randomFriends = [
    { 
      id: 1,
      avatar: "https://bit.ly/3SQEqgj"
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
  
  return (
    <div className={styles.friends}>
      <h4 className={styles.friends__title}>Friends:</h4>

      <div className={styles.friends__list}>
        {randomFriends
          .map(friend => (
            <button className={styles.friends__item} key={friend.id}>
              <img
                className={styles.friends__avatar}
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
