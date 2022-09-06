import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = () => {

  const usersData = [
    {
      id: 1,
      avatar: 'https://bit.ly/3Qh9rbl',
      name: 'Ironman',
      description: 'Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense. Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.',
      wallpaper: 'https://bit.ly/3wXgbnV'
    }
  ];

  return (
    <section className={styles.user}>
      <div className={styles.images}>
        <div>
          <img
            src={usersData[0].wallpaper}
            alt='User profile wallpaper'
            className={styles.wallpaper}
          />
        </div>

        <div className={styles.avatarContainer}>
          <img
            src={usersData[0].avatar}
            alt='User avatar'
            className={styles.avatar}
          />
        </div>
      </div>

      <h2 className={styles.userName}>
        {usersData[0].name}
      </h2>

      <div className={styles.description}>
        {usersData[0].description}
      </div>
    </section>
  );
};

export default UserInfo;
