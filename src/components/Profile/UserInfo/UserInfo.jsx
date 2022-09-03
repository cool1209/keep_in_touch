import React from 'react';
import styles from './UserInfo.module.css';
import userAva from './../../../user-ava.jpg';

const UserInfo = () => {
  return (
    <section className={styles.user}>
      <div className={styles.images}>
        <div>
          <img
            src='https://motorcar.com.ua/wp-content/uploads/2020/10/ford-mustang-mach-1-2021-2.jpg'
            alt='User profile wallpaper'
            className={styles.wallpaper}
          />
        </div>

        <div className={styles.avatarContainer}>
          <img
            src={userAva}
            alt='User avatar'
            className={styles.avatar}
          />
        </div>
      </div>

      <div className={styles.description}>
      Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense. Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.
      </div>
    </section>
  );
};

export default UserInfo;
