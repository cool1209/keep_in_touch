import React from 'react';
import s from './SideFriends.module.css';

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
    <div className={s.friends}>
      <h4 className={s.friends__title}>Friends:</h4>

      <div className={s.friends__list}>
        {randomFriends
          .map(friend => (
            <button className={s.friends__item} key={friend.id}>
              <img
                className={s.friends__avatar}
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
