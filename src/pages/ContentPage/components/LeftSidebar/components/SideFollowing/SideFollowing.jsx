import React from 'react';
import styles from './SideFollowing.module.css';

const SideFollowing = () => {
  const myRandomFollowing = [
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
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Following:</h4>

      <div className={styles.buttonsContainer}>
        {myRandomFollowing
          .map(following => (
            <button className={styles.button} key={following.id}>
              <img
                className={styles.avatar}
                src={following.avatar}
                alt="Following avatar"
              />
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default SideFollowing;
