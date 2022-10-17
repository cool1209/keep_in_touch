import React from 'react';
import SideFriendsStyles from './SideFriends.module.css';

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
    <div className={SideFriendsStyles.wrapper}>
      <h4 className={SideFriendsStyles.title}>Friends:</h4>

      <div className={SideFriendsStyles.buttonsContainer}>
        {randomFriends
          .map(friend => (
            <button className={SideFriendsStyles.button} key={friend.id}>
              <img
                className={SideFriendsStyles.avatar}
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
